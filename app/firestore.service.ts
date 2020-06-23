import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore) { }

  public insertar(coleccion, datos) {
    return this.angularFirestore.collection(coleccion).add(datos);
  }   

  public consultar(coleccion) {
    return this.angularFirestore.collection(coleccion).snapshotChanges();
  }

}