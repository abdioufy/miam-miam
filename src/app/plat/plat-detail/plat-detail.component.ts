import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlat } from '../plat';
import { PlatService } from '../plat-service/plat.service';

@Component({
  selector: 'app-plat-detail',
  templateUrl: './plat-detail.component.html',
  styleUrls: ['./plat-detail.component.scss']
})
export class PlatDetailComponent implements OnInit {

  plats$: Observable<IPlat[]>;
  constructor(private platService: PlatService) { }

  ngOnInit() {
    this.plats$ = this.platService.list();
  }

}
