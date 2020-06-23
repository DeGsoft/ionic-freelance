import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirestoreService } from '../../app/firestore.service';
import { Tarea } from '../../app/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tareaEditando: Tarea; 

  constructor(public navCtrl: NavController,private firestoreService: FirestoreService) {
    // Crear una tarea vacía
    this.tareaEditando = {} as Tarea;
  } 

  clicBotonInsertar() {
  this.firestoreService.insertar("tareas", this.tareaEditando).then(() => {
    console.log('Tarea creada correctamente!');
    this.tareaEditando= {} as Tarea;
  }, (error) => {
    console.error(error);
  });
}

}
