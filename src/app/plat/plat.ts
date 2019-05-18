import { IRestaurant } from '../restaurant/restaurant';

export interface IPlat {
    objectID: string;
    nom: string;
    description: string;
    prix: number;
    chef?: string;
    jours: string[];
    photos: string[];
    tags: string[];
    restaurant: IRestaurant; // to replace IRestaurantPlat

}
