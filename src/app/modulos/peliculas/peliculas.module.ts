import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeliculasRoutingModule } from './peliculas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaPeliculaComponent } from '../../componentes/alta-pelicula/alta-pelicula.component';
import { TablaActorComponent } from 'src/app/componentes/tabla-actor/tabla-actor.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
    ReactiveFormsModule
    

  ]
})
export class PeliculasModule { }
