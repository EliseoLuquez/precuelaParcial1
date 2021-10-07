import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { ActorService } from 'src/app/service/actor.service';
import { PeliculaService } from 'src/app/service/peliculas.service';
import { Actor } from 'src/app/shared/actor';
import { ImgPeli } from 'src/app/shared/img-peli';
import { Pelicula } from 'src/app/shared/pelicula';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.css']
})
export class AltaPeliculaComponent implements OnInit {

  formulario!: FormGroup;
  pelicula: Pelicula;
  imgPeli: ImgPeli;
  selectedFiles: FileList;
  percentage: number;
  listaActores: Actor[] = [];
  actorSeleccionado: Actor;
  actor: Actor = new Actor();
  actores: Actor[] = [];

  constructor(public fv: FormBuilder, public peliSvc: PeliculaService, public actorSvc: ActorService) {
    this.formulario = fv.group({
      nombre:["", Validators.required],
      tipo:["", Validators.required],
      fechaEstreno:["", Validators.required],
      cantidadPublico:["", Validators.required],
      //actor:["", Validators.required],
      actores:["", Validators.required],
      imgPelicula:["", Validators.required]
      
    });
   
   }

  ngOnInit(): void {
    this.cargarActores();
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
    
  }


  guardar(){
    
    console.log(this.formulario);
    this.pelicula = new Pelicula();
    this.pelicula.nombre  = this.formulario.controls['nombre'].value;
    this.pelicula.tipo = this.formulario.controls['tipo'].value;
    this.pelicula.fechaEstreno = this.formulario.controls['fechaEstreno'].value;
    this.pelicula.cantidadPublico = this.formulario.controls['cantidadPublico'].value;
    //this.pelicula.actor = this.actorSeleccionado;
    this.pelicula.actores = this.actores;
    console.log(this.pelicula);

    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.imgPeli = new ImgPeli(file);
    console.log(this.pelicula);
    
    this.peliSvc.uploadPeliImg(this.imgPeli, this.pelicula).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

  asignarActorSeleccionado(actor: Actor){
    console.log(actor);
  
    this.actorSeleccionado = actor;
    this.actores.push(this.actorSeleccionado);
    //let apellidoYNombre = actor.nombre + " " + actor.apellido;
    //this.formulario.controls['actor'].setValue(apellidoYNombre);
    this.formulario.controls['actores'].setValue(this.actores);
  }

  cargarActores(){
    this.actorSvc.getActores().subscribe((actores:any) => {
      this.listaActores = actores;
      console.log(actores);
    });
  }

}
