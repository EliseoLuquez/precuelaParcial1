import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  public obtenerPaises(pais: string){
    return this.http.get("https://restcountries.com/v3.1/name/" + pais);
  }

}
