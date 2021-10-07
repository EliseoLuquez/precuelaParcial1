import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actor } from '../shared/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  dbPath: string = "actores";
  actoresCollection: AngularFirestoreCollection;
  actores!: Observable<Actor[]>;

  constructor(public db: AngularFirestore, public storage: AngularFireStorage) {
    this.cargarActores();
   }

  addActor(actor: Actor){
    console.log(this.actoresCollection);
    this.actoresCollection.add({
      nombre: actor.nombre,
      apellido: actor.apellido,
      usuario: actor.usuario,
      email: actor.email,
      direccion: actor.direccion,
      paisOrigen: actor.paisOrigen
    });
   }

  cargarActores() {
    this.actoresCollection = this.db.collection(this.dbPath);
    this.actores = this.actoresCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Actor;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  getActores() {
    // this.peliculas = this.peliculasCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => a.payload.doc.data() as Pelicula))
    // );
    // console.log(this.peliculas);
    return this.actores;
  }
}
