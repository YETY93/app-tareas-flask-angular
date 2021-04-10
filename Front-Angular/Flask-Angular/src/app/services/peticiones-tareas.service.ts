import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Tarea } from './../interfaces/tarea';
import { Router } from '@angular/router';



const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PeticionesTareasService {
  private urlback = 'http://yety.alwaysdata.net';


  constructor(private httpMethod: HttpClient,
    private router: Router) {
  }

  listarTareas() {
    return this.httpMethod.get<Tarea[]>(`${this.urlback}/traer_tareas`, httpOptions);
  }

  crearTarea(tarea: Tarea) {
    const path = `${this.urlback}/crear_tarea`;
    console.log('Estoy en URl');
    return this.httpMethod.post(path, tarea, httpOptions);
  }

  buscarTarea(id: string) {
    return this.httpMethod.get<Tarea>(`${this.urlback}/consultar_tarea${id}`, httpOptions);
  }

  actualizarTarea(tarea: Tarea) {
    return this.httpMethod.put<Tarea>(`${this.urlback}/actualizar_tarea`, tarea, httpOptions);
  }
}
