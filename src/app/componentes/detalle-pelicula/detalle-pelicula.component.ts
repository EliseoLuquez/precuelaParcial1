import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PeliculaService } from 'src/app/service/peliculas.service';
import { Pelicula } from 'src/app/shared/pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaDetalle!: Pelicula;
  peliculaModificada!: Pelicula;
  formulario: any;

  constructor(public peliSvc: PeliculaService, public fv:FormBuilder) {
    this.formulario = fv.group({
      nombre:[""],
      tipo:[""],
      fechaEstreno:[""],
      cantidadPublico:[""],
      imgPelicula:[""]
    });
   
   }

  ngOnInit(): void {
  }

  modificarPeli(){
    console.log(this.peliculaDetalle);
    
    this.peliSvc.updatePelicula(this.peliculaDetalle);
  }

}
