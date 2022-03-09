import { Injectable } from '@angular/core';
import { Cancion } from '../models/Canciones';
import { ListaReproduccion } from '../models/ListaReproduccion';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {  Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListReproduccionServiceService {

  url:string = 'http://localhost:8080/lists';
  
  constructor(private http: HttpClient) { }

  get(name : string):Observable<ListaReproduccion>{
    return this.http.get<ListaReproduccion>(this.url + '/' + name);

  }

  getTodos():Observable<ListaReproduccion>{
    return this.http.get<ListaReproduccion>(this.url);

  }

  post(name : string):Observable<ListaReproduccion>{
    return this.http.get<ListaReproduccion>(this.url);
  }

}
