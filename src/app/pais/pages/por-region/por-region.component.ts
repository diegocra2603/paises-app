import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles : [`
    button {
      margin-right: 10px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva:string = '';

  paises:Country[] = [];

  hayError:boolean = false;

  constructor(private paisService:PaisService) { }
  
  getClaseCss(region:string): string {
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion(region:string) {

    if(region === this.regionActiva)
    return;

    this.regionActiva = region;
    this.hayError = false;
    this.paises = [];
    this.paisService.buscarRegion(region).subscribe(paises => {
      this.paises = paises;
    }, error => {
      this.hayError = true;
    })
  }


}
