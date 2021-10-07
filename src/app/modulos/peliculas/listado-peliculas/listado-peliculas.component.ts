import { Component, Input, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/service/peliculas.service';
import { Actor } from 'src/app/shared/actor';
import { Pelicula } from 'src/app/shared/pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  pelicula: Pelicula;


  constructor(public peliSvc: PeliculaService) { }

  ngOnInit(): void {

  }

  // cargarPeliculas(){
  //   this.peliSvc.getPeliculas().subscribe((peliculas:any) => {
  //     this.peliculas = peliculas;
  //     console.log(peliculas);
  //   });
  // }

  // getPeliculasByIdActor(actorId: string){
  //   console.log(actorId);
    
  //   if(actorId){
  //     this.peliSvc.cargarPeliculasByIdActor(actorId).subscribe((peliculas:any) => {
  //       this.peliculas = peliculas;
  //       console.log(peliculas);
  //     });
  //   }
  // }

}
