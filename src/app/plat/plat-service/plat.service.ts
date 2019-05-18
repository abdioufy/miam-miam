import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IRestaurant } from 'src/app/restaurant/restaurant';
import { IPlat } from '../plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  constructor(private readonly db: AngularFirestore) {}

  list(): Observable<IPlat[]> {
    return this.db.collection<IPlat>('/plats').valueChanges();
  }

  add(plat: IPlat): void {
     this.db.collection<IPlat>('/plat').add(plat);
  }
}
