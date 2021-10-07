import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from 'src/app/service/peliculas.service';
import { Actor } from 'src/app/shared/actor';
import { Pelicula } from 'src/app/shared/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  formulario!: FormGroup;
  listaPeliculas: Pelicula[] = [];
  peliSeleccionada: Pelicula;
  listaActores: Actor[] = [];

  constructor(public peliSvc: PeliculaService, public fv: FormBuilder) {
    //this.cargarPeliculas();
    this.formulario = fv.group({
      nombre:["", Validators.required],
      tipo:["", Validators.required],
      fechaEstreno:["", Validators.required],
      cantidadPublico:["", Validators.required],
      imgPelicula:["", Validators.required]
    });
   }

  ngOnInit(): void {
  }

  mostrarPeliSeleccionada(pelicula: Pelicula){
    this.listaActores = [];
    this.peliSeleccionada = pelicula;
    console.log(this.listaActores);
    this.listaActores = this.peliSeleccionada.actores;
    //this.listaActores.push(this.peliSeleccionada.actor);
  }
  
}
