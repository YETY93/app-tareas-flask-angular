import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tarea } from './../interfaces/tarea'


@Injectable({
  providedIn: 'root'
})
export class PeticionesTareasService {

  constructor( private httClient: HttpClient ) {
    
   }
}
