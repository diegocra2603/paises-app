import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  hayError: boolean = false;
  termino:string = '';
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias:boolean = true;

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.hayError = false;
    this.paisService.buscarPais(termino).subscribe( (paises) => {
      this.paises = paises;
    }, (error) => {
      this.hayError = true;
      this.paises = [];
    } );

  }

  sugerencias(termino:string){
    this.mostrarSugerencias = true;
    this.hayError = false;
    this.termino = termino;
    this.paisesSugeridos = [];
    this.paisService.buscarPais(termino).subscribe( (paises) => {
      this.paisesSugeridos = paises.splice(0,3);
    }, () => this.paisesSugeridos = [] );
  }

  buscarSugerido(termino:string){

  }

}