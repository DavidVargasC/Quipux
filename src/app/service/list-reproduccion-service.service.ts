import { Injectable } from '@angular/core';
import { Cancion } from '../models/Canciones';
import { ListaReproduccion } from '../models/ListaReproduccion';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import {  Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListReproduccionServiceService {
  
  constructor(private http: HttpClient) { }

  get(name : string):Observable<any>{
    return this.http.get<any>('lists/' + name);

  }

  getTodos():Observable<any>{
    return this.http.get<any>('lists');

  }

  post(name : string):Observable<any>{
    return this.http.get<any>('lists/' + name);
  }

  delete(name : string):Observable<any>{
    return this.http.delete<any>('lists/' + name);
  }
}
