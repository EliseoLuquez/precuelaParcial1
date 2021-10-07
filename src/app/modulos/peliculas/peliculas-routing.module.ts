import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPeliculaComponent } from '../../componentes/alta-pelicula/alta-pelicula.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';


const routes: Routes = [
  {path: 'alta', component: AltaPeliculaComponent},
  {path: 'listado', component: ListadoPeliculasComponent},
  // {path: '', redirectTo:'alta',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
