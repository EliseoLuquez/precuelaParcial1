import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorRoutingModule } from './actor-routing.module';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { ListadoPeliculasComponent } from '../peliculas/listado-peliculas/listado-peliculas.component';
import { PaisDetalleComponent } from 'src/app/componentes/pais-detalle/pais-detalle.component';
import { ActorDetalleComponent } from 'src/app/componentes/actor-detalle/actor-detalle.component';



@NgModule({
  declarations: [
    AltaActorComponent,
    ListadoActoresComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    PaisDetalleComponent,
    ListadoPeliculasComponent,
    ActorDetalleComponent
  ],
  imports: [
    CommonModule,
    ActorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ActorModule { }
