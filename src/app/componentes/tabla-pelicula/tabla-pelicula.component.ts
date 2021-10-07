import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaService } from 'src/app/service/peliculas.service';
import { Pelicula } from 'src/app/shared/pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  @Input() peliculas: Pelicula[] = [];
  pelicula: Pelicula;
  

  constructor(public peliSvc: PeliculaService) { }

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(){
    this.peliSvc.getPeliculas().subscribe((peliculas:any) => {
      this.peliculas = peliculas;
      console.log(peliculas);
    });
  }



  mostrarDetalle(pelicula: any){
    this.peliculaSeleccionada.emit(pelicula);
    
  }


}
