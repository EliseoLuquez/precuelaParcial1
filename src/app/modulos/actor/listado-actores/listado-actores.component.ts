import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { Actor } from 'src/app/shared/actor';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css']
})
export class ListadoActoresComponent implements OnInit {

  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() actores: Actor[] = [];
  actor: Actor;
  

  constructor(public actorSvc: ActorService) { }

  ngOnInit(): void {
    this.cargarActores()
  }


  cargarActores(){
    this.actorSvc.getActores().subscribe((actores:any) => {
      this.actores = actores;
      console.log(actores);
    });
  }

  mostrarPeliculasActor(actor: any){
    this.actorSeleccionado.emit(actor);
  }

}
