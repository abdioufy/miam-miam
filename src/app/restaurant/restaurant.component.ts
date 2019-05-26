import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RestaurantService } from './restaurant-service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  restaurantForm: FormGroup;
  paiementOptions = ['carte', 'ticketrestaurant'];
  constructor(private fb: FormBuilder, private restoService: RestaurantService) {}

  ngOnInit() {
   this.restaurantForm = this.fb.group({
      nom: '',

      adresse: this.fb.group({
        rue: '',
        ville: '',
        codepostal: ''
      }),

      contact: this.fb.group({
        email: '',
        telephone: ''
      }),

      paiements: new FormGroup({ }),

    });
  }


  get paiementOptionsForms() {
    return this.restaurantForm.get('paiements') as FormGroup;
  }

  private addPaiementOption() {
    this.paiementOptions.forEach(option => this.paiementOptionsForms.addControl(option, new FormControl(false)));
  }


  submitHandler() {
    const formValue = this.restaurantForm.value;
    this.restoService.save(formValue);    
  }
}
