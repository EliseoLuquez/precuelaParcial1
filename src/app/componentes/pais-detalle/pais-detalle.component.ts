import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.css']
})
export class PaisDetalleComponent implements OnInit {

  @Input() paisDetalle!: any;

  constructor(public paisSvc: PaisesService) { }

  ngOnInit(): void {
  }

  // cargarPaisByNombre(nombrePais: string){
  //   this.paisSvc.obtenerPaises(nombrePais).subscribe((pais:any)=>{
  //     this.pais = pais;
  //     console.log(pais);
  //   });
  // }

}
