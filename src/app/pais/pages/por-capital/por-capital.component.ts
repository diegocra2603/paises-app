import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {

  hayError: boolean = false;
  termino: string = '';
  paises: Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar(termino: string) {
    this.termino = termino;
    this.hayError = false;

    this.paisService.buscarCapital(termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    });

  }

}
