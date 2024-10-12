import { Injectable } from '@angular/core';
import * as articoli from '../database/articoli.json'

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  

  constructor() { }

  getArticoli()
  {
    return articoli;
  }



}
