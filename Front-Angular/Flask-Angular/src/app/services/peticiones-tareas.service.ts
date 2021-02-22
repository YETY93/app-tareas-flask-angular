import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tarea } from './../interfaces/tarea'
import { Router } from '@angular/router';


const httpOption = {
  headers: new HttpHeaders ({
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeticionesTareasService {
private urlback = 'http://127.0.0.1:5000';


  constructor( private httpMethod: HttpClient,
               private router: Router ) {
   }

  listarTareas(){
    return this.httpMethod.get<Tarea[]>(`${this.urlback}/traer_tareas`);
  }

  crearTarea(tarea: Tarea){
    return this.httpMethod.post(`${this.urlback}/crear_tarea`, tarea);
  }

  buscarTarea(id: string){
    return this.httpMethod.get<Tarea>(`${this.urlback}/consultar_tarea${id}`);
  }

  actualizarTarea(tarea: Tarea){
    return this.httpMethod.put<Tarea>(`${this.urlback}/actualizar_tarea`, tarea);
  }
}
