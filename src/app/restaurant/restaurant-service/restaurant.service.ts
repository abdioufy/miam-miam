import { Injectable } from '@angular/core';
import { IRestaurant } from '../restaurant';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private readonly firestore: AngularFirestore) { }

  list(): Observable<IRestaurant[]> {
    return this.firestore.collection<IRestaurant>('/restaurants')
      .valueChanges();
  }
}
