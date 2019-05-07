import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant/restaurant-service/restaurant.service';
import { Observable } from 'rxjs';
import { IRestaurant } from './restaurant/restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  restaurants$: Observable<IRestaurant[]>;

  constructor(private readonly restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.restaurants$ = this.restaurantService.list();
  }
}
