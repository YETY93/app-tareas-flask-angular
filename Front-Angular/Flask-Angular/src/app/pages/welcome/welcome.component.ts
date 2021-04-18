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

  formTarea!: FormGroup;
  public tareaInterface: Tarea;
  public listaTareas: Tarea[];
  public cargando: boolean;





  constructor( private formBuilder: FormBuilder,
               private tareasService: PeticionesTareasService) {

  }


  ngOnInit(): void {
    this.cargando = true;
    this.traerTareas();
    this.activarFb();
  }

  /**
   * Ventanas modales de notificaión de accionbes
   */
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

  submitForm(): void {
    // tslint:disable-next-line: forin
    for (const i in this.formTarea.controls){
      this.formTarea.controls[i].markAsDirty();
      this.formTarea.controls[i].updateValueAndValidity();
    }
  }

    /**
     * Función para instanciar el formulario de crear tareas
     */

    activarFb(): void{
      this.formTarea = this.formBuilder.group({
        titulo: [null, [Validators.required]],
        descripcion: [null, [Validators.required]]
      });
    }


  /*
   * Función que se encarga de borrar el contenido del Formulario
   */
  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.formTarea.reset();
    this.modalError('Los datos ingresados, se han borrado.');
  }


  // Servicios y/o ejecución del CRUD

  traerTareas(){
    this.tareasService.listarTareas()
    .subscribe(data => {
      if (this.cargando ) {
        setTimeout(() => {
          this.listaTareas = data;
          this.cargando = false;
         }, 3000);
      }else{
        this.listaTareas = data;
        this.cargando = false;
      }
    });
  }

  crearTarea(values){
    console.log(values);
    this.tareasService.crearTarea(values)
    .subscribe((tareaRecibida) => {
    console.log('HE sido pulsado crear');
    this.modalConfirmnacion('La actividad, ha sido guardada');
    setTimeout(() => {
      location.reload();
     }, 3600);
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
