import { Component, OnInit } from '@angular/core';
import { PlatService } from './plat-service/plat.service';
import { Observable } from 'rxjs';
import { IPlat } from './plat';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent implements OnInit {

  plats$: Observable<IPlat[]>;
  constructor(private platService: PlatService) { }

  ngOnInit() {
    this.plats$ = this.platService.list();
  }

}
