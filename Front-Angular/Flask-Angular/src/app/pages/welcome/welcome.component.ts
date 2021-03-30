import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
//import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import { PeticionesTareasService } from './../../services/peticiones-tareas.service';

import { Tarea } from 'src/app/interfaces/tarea';

/**
 * @author
 *
 */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
 export class WelcomeComponent implements OnInit {
  title = 'Aplicacion WEB de tareas';


  public tareaInterface: Tarea;
  datosFormTarea: FormGroup;
  public listaTareas: Tarea[];






  constructor( private formBuilder: FormBuilder,
               private tareasService: PeticionesTareasService) {

      this.datosFormTarea = this.formBuilder.group({

        titulo: ['', Validators.required],
        descripcion: ['', Validators.required]
      });
  }


  //Ventanas modales de notificaión de accionbes
  modalError(Mensaje: string){
    Swal.fire({
      title: 'Advertencia!',
      text: Mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

  modalConfirmnacion(mensaje: string ){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 3500
    });
  }

  /*
   * Función que se encarga de borrar el contenido del Formulario
   */
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.datosFormTarea.reset();
    this.modalError('Los datos ingresados, se han borrado.');
  }


  ngOnInit(): void {
    this.traerTareas();
  }


  // Servicios y/o ejecución del CRUD

  traerTareas(){
    this.tareasService.listarTareas()
    .subscribe(data => {
      this.listaTareas = data;
    });
  }

  crearTarea(values){
    console.log(values);
    this.tareasService.crearTarea(values)
    .subscribe((tareaRecibida) => {
    //this.datosFormTarea.reset();
    //this.ngOnInit();
    this.modalConfirmnacion('La actividad, ha sido guardada');
    });

  }

  editarTarea( tarea ){
    this.tareasService.actualizarTarea(tarea)
    .subscribe(data => {
    });
  }

  traerTarea(id){
    this.tareasService.buscarTarea(id)
    .subscribe(data =>{
      console.log(data);
    });
  }

}
