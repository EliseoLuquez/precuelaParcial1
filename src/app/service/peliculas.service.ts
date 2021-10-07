import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pelicula } from '../shared/pelicula';
import { finalize, map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImgPeli } from '../shared/img-peli';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  dbPath: string = "peliculas";
  dbPathActores: string = "peliculas/actores";

  peliculasCollection: AngularFirestoreCollection;
  peliculas!: Observable<Pelicula[]>;
  peliculasByActor!: Observable<Pelicula[]>;

  constructor(public db: AngularFirestore, public storage: AngularFireStorage) {
    // this.peliculasCollection = this.db.collection<Pelicula>(this.dbPath, ref => ref.orderBy('fechaEstreno','desc'));
    this.cargarPeliculas();
  }

  addPelicula(pelicula: Pelicula, imgPeli: ImgPeli){
    console.log(this.peliculasCollection);
    this.peliculasCollection.add({
      nombre: pelicula.nombre,
      tipo: pelicula.tipo,
      fechaEstreno: pelicula.fechaEstreno,
      cantidadPublico: pelicula.cantidadPublico,
      imgNombre: imgPeli.nombre,
      imgUrl: imgPeli.url,
      //actor: pelicula.actor
      actores: pelicula.actores
    });
   }

  cargarPeliculas() {
    this.peliculasCollection = this.db.collection(this.dbPath);
    this.peliculas = this.peliculasCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Pelicula;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  cargarPeliculasByIdActor(idActor: string){
    //this.peliculasCollection = this.db.collection(this.dbPath, ref => ref.where('actor.id', '==', idActor));
    this.peliculasCollection = this.db.collection(this.dbPath);
    //this.peliculasCollection = this.db.collection(this.dbPath).doc('peliculas').collection("actores", ref => ref.where('id', '==', idActor));
    console.log(this.peliculasCollection);
    
    this.peliculasByActor = this.peliculasCollection.snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          let data = a.payload.doc.data() as Pelicula;
          data.id = a.payload.doc.id;
          console.log(data);
        
          return data; 
        });
      }));
      console.log(this.peliculasByActor);
      return this.peliculasByActor;
  }

  getPeliculasByActor(){
    return this.peliculasByActor;
  }

  getPeliculas() {
    // this.peliculas = this.peliculasCollection.snapshotChanges().pipe(
    //   map(actions => actions.map(a => a.payload.doc.data() as Pelicula))
    // );
    // console.log(this.peliculas);
    return this.peliculas;
  }

  onUpload(filePath: string, file: any){
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  }

  uploadPeliImg(imgPeli: ImgPeli, pelicula: Pelicula): Observable<number> {
    const filePath = `${this.dbPath}/${imgPeli.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, imgPeli.file);
  
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          imgPeli.url = downloadURL;
          imgPeli.nombre = imgPeli.file.name;
          this.addPelicula(pelicula, imgPeli);
        });
      })
    ).subscribe();
  
    return uploadTask.percentageChanges();
  }

  deleteFile(imgPeli: ImgPeli): void {
        this.deleteFileStorage(imgPeli.nombre);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.dbPath);
    storageRef.child(name).delete();
  }

  updatePelicula(pelicula: Pelicula){
    const tutorialsRef = this.db.collection(this.dbPath);
    tutorialsRef.doc(pelicula.id).update({ nombre: pelicula.nombre });
  } 
}