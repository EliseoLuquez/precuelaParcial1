import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/shared/actor';

@Component({
  selector: 'app-actor-detalle',
  templateUrl: './actor-detalle.component.html',
  styleUrls: ['./actor-detalle.component.css']
})
export class ActorDetalleComponent implements OnInit {

  @Input() actorDetalle!: Actor;


  constructor() { }

  ngOnInit(): void {
  }

}
