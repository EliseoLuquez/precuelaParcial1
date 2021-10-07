import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { Actor } from 'src/app/shared/actor';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  @Input() actores: Actor[] = [];
  actor: Actor;

  constructor(public actorSvc: ActorService) { }

  ngOnInit(): void {
  }


 

  asignarActorSeleccionado(actor: Actor){
    this.actorSeleccionado.emit(actor);
    console.log(actor.nombre);
    
  }

}
