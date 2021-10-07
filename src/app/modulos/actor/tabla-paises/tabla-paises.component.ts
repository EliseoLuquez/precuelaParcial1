import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() paises: any[] = [];
  pais: any;

  constructor(public paisSvc: PaisesService) { 
    this.paisSvc.obtenerPaises("argentina").subscribe((pais: any) => {
      console.log(pais);
      this.paises.push(pais[0]);
    },error =>{console.log(error);
    });
    this.paisSvc.obtenerPaises("brasil").subscribe((pais: any) => {
      console.log(pais);
      this.paises.push(pais[0]);
    },error =>{console.log(error);
    });
    this.paisSvc.obtenerPaises("uruguay").subscribe((pais: any) => {
      console.log(pais);
      this.paises.push(pais[0]);
    },error =>{console.log(error);
    });
    this.paisSvc.obtenerPaises("chile").subscribe((pais: any) => {
      console.log(pais);
      this.paises.push(pais[0]);
    },error =>{console.log(error);
    });this.paisSvc.obtenerPaises("bolivia").subscribe((pais: any) => {
      console.log(pais);
      this.paises.push(pais[0]);
    },error =>{console.log(error);
    });

    console.log(this.paises);
  }

  ngOnInit(): void {
  }

  asignarPais(pais: any){
    //this.arrayLetras.push(letra);
    // this.pelicula = pelicula;
    // console.log(this.pelicula);
    this.paisSeleccionado.emit(pais);
    
  }
}