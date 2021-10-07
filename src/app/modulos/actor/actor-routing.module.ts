import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { AltaActorComponent } from './alta-actor/alta-actor.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';

const routes: Routes = [
  {path: 'alta', component: AltaActorComponent},
  {path: 'listado', component: ListadoActoresComponent},
  {path: 'actorPelicula', component: ActorPeliculaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorRoutingModule { }
