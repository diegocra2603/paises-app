import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute:ActivatedRoute,
              private paisService:PaisService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({codigoPais}) => this.paisService.getPaisPorCodigo(codigoPais) ),
      tap( (resp) => console.log(resp[0]) )
    ).subscribe( (pais) => {
      this.pais = pais[0];
    });

  }

}
