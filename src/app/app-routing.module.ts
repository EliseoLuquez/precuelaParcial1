import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/paginas/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/paginas/busqueda/busqueda.component';
import { ActorModule } from './modulos/actor/actor.module';
import { PeliculasModule } from './modulos/peliculas/peliculas.module';

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: '', redirectTo:'bienvenido', pathMatch:'full'},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'peliculas', loadChildren: () => import('./modulos/peliculas/peliculas.module').then(m => PeliculasModule)},
  {path: 'actor', loadChildren: () => import('./modulos/actor/actor.module').then(m => ActorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
