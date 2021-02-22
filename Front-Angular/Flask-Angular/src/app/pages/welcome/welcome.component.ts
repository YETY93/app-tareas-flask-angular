import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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

  pestanas =  [
    {
      name: 'Lista de Tareas',
      icon: 'unordered-list'
    },
    {
      name: 'Crear Tareas',
      icon: 'edit'
    }
  ];


resetForm(){
    this.datosFormTarea.reset();
    alert('Borrado');
  }

enviarTareaForm(values){
    console.log(values);
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
    this.tareasService.crearTarea(values)
    .subscribe((tareaEnviada) => {
      this.datosFormTarea.reset();
      alert('Tarea Registrada exitosamente');
    });

  }

  editarTarea( tarea ){
    this.tareasService.actualizarTarea(tarea)
    .subscribe(data => {
      console.log(data);
    });
  }

  traerTarea(id){
    this.tareasService.buscarTarea(id)
    .subscribe(data =>{
      console.log(data);
    });
  }

}
