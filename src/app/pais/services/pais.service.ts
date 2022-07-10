import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _baseUrl: string = 'https://restcountries.com/v3.1/';

  get httParams(){
    return new HttpParams()
    .set('fields', 'name,capital,population,cca2,flags');
  }

  constructor(private _htttpClient: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this._baseUrl}/name/${termino}`;

    return this._htttpClient.get<Country[]>(url, {params: this.httParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this._baseUrl}capital/${termino}`;

    return this._htttpClient.get<Country[]>(url, {params: this.httParams});

  }

  getPaisPorCodigo(codigoPais:string): Observable<Country[]> {

    const url = `${this._baseUrl}alpha/${codigoPais}`;

    return this._htttpClient.get<Country[]>(url);

  }

  buscarRegion(region:string): Observable<Country[]> {


      const url = `${this._baseUrl}region/${region}`;
  
      return this._htttpClient.get<Country[]>(url, {params: this.httParams});
  }

}
