import { Component, OnInit } from '@angular/core';
import { PlatService } from './plat-service/plat.service';
import { Observable } from 'rxjs';
import { IPlat } from './plat';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  FormControl
} from '@angular/forms';
import { RestaurantService } from '../restaurant/restaurant-service/restaurant.service';
import { IRestaurant } from '../restaurant/restaurant';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {
  platForm: FormGroup;
  restaurantPlats$: Observable<IRestaurant[]>;
  tags = ['vegetarien', 'vegan', 'halal', 'casher'];

  constructor(
    private fb: FormBuilder,
    private platService: PlatService,
    private restoService: RestaurantService
  ) {}

  ngOnInit() {
    this.initPlatForm();
    this.restaurantPlats$ = this.restoService.getByUser();
    this.addTags();
  }

  private initPlatForm() {
    this.platForm = this.fb.group({
      restaurant: ['', [Validators.required]],
      nom: '',
      description: '',
      prix: '',
      chef: '',
      jours: this.fb.array([this.fb.group({ jour: '' })]),
      tags: new FormGroup({ }),
    });
  }

  get jourForms() {
    return this.platForm.get('jours') as FormArray;
  }

  get tagForms() {
    return this.platForm.get('tags') as FormGroup;
  }

  addJour() {
    const jour = this.fb.group({ jour: '' });
    this.jourForms.push(jour);
  }

  deleteJour(i: number) {
    this.jourForms.removeAt(i);
  }

  private addTags() {
    this.tags.forEach(tag => this.tagForms.addControl(tag, new FormControl(false)));
  }

  submitHandler() {
    const formValue = this.platForm.value;
    console.log('the form ', formValue);
  }
}
