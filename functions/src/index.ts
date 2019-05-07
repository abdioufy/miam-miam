import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

/**
 * Met à jour les donnees restaurant qui se trouve dans la collection plats
 * à chaque fois qu'une mise à jour est détecté sur collection restaurants
 */
export const onRestaurantUpdate = functions.firestore
  .document("/restaurants/{restaurantId}")
  .onUpdate(change => {
    const restaurantBefore = change.before.data();
    const restaurantAfter = change.after.data();
    const id = change.after.id;

    console.log("update restaurant before: ", id, " => ", restaurantBefore, " after => ", restaurantAfter);

    if (isSame(restaurantBefore, restaurantAfter)) return null;
  
    return Promise.all([updateRestaurantToPlatRestaurant(id, restaurantAfter)]);
  });

function isSame(a: any, b: any) {
  return JSON.stringify(a) === JSON.stringify(b);
}

async function updateRestaurantToPlatRestaurant(id: string, restoAfter: any) {
  
  const restoPlat = restaurantToPlatRestaurant(id, restoAfter);
  

  const restaurantsPlats = await admin
    .firestore()
    .collection("/plats")
    .where("restaurant.objectID", "==", id)
    .get();

  const batch = admin.firestore().batch();

  restaurantsPlats.forEach(resto => {
    batch.update(resto.ref, {restaurant: restoPlat})
  });
  
  console.log("update the collection plats with the new data plat.restaurant: ", restoPlat);
  return await batch.commit();
}

function restaurantToPlatRestaurant(id:string, restaurant: any): any {
  return {
    objectID: id,
    nom: restaurant.nom,
    adresse: restaurant.adresse,
    geopoints: restaurant.geopoints
  };
} 
