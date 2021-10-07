import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { PaisesService } from 'src/app/service/paises.service';
import { PeliculaService } from 'src/app/service/peliculas.service';
import { Actor } from 'src/app/shared/actor';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  listaActores: any[] = [];
  actorElegido: Actor = new Actor();
  listaPeliculas: any[] = [];
  //peliSeleccionada: any;
  actorId: string;
  pais: any;

  constructor(public actorSvc: ActorService, public peliSvc: PeliculaService, public paisSvc: PaisesService) { }

  ngOnInit(): void {
  }

  mostrarDatosActorSeleccionado(actor: any){
    this.mostrarPelisActorSeleccionado(actor);
    this.mostrarPaisActorSeleccionado(actor.paisOrigen);
    this.cargarActor(actor);
  }

  mostrarPelisActorSeleccionado(actor: any){
    // this.actorId = actor.id;
    // this.peliSvc.cargarPeliculasByIdActor(actor.id).subscribe((peliculas:any) => {
    //   this.listaPeliculas = peliculas;
    //   console.log(peliculas);
    // });
    // console.log(this.actorId);
    this.actorId = actor.id;
    this.peliSvc.cargarPeliculasByIdActor(actor.id).subscribe((peliculas:any) => {
      peliculas.filter(item => {
        item.actores.forEach(element => {
          if(element.id == this.actorId){
            this.listaPeliculas.push(item);
          }
        });
      })
      //this.listaPeliculas = peliculas;
      console.log(peliculas);
    });
   
  }

  mostrarPaisActorSeleccionado(paisNombre: string){
    console.log(paisNombre);
    
    this.paisSvc.obtenerPaises(paisNombre.toLocaleLowerCase()).subscribe((pais:any)=>{
      this.pais = pais[0];
      console.log(this.pais);
    });
  }

  cargarActor(actor: any)
  {
    console.log(actor.nombre);
    
    this.actorElegido.nombre = actor.nombre;
    console.log(this.actorElegido.nombre);
    this.actorElegido.apellido = actor.apellido;
    this.actorElegido.usuario = actor.usuario;
    this.actorElegido.direccion = actor.direccion;
    this.actorElegido.email = actor.email;
    this.actorElegido.paisOrigen = actor.paisOrigen;
  }



 
  
}
