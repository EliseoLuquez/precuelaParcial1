
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorService } from 'src/app/service/actor.service';
import { PaisesService } from 'src/app/service/paises.service';
import { Actor } from 'src/app/shared/actor';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {
  
  formulario!: FormGroup;
  actor: Actor;
  listaPaises: any[] = [];
  paisSeleccionado: any;

  constructor(public fv: FormBuilder, public actorSvc: ActorService, public paisSvc: PaisesService) {
    this.formulario = fv.group({
      nombre:["", Validators.required],
      apellido:["", Validators.required],
      usuario:["", Validators.required],
      email:["", Validators.required],
      direccion:["", Validators.required],
      paisOrigen:["", Validators.required]
    });

    
    
   }

  ngOnInit(): void {
  }

  guardarActor(){
    // console.log(this.formulario);
    this.actor = new Actor();
    this.actor.nombre  = this.formulario.controls['nombre'].value;
    this.actor.apellido = this.formulario.controls['apellido'].value;
    this.actor.usuario = this.formulario.controls['usuario'].value;
    this.actor.email = this.formulario.controls['email'].value;
    this.actor.direccion = this.formulario.controls['direccion'].value;
    this.actor.paisOrigen = this.formulario.controls['paisOrigen'].value;
    console.log(this.actor);

    this.actorSvc.addActor(this.actor);
    
  }

  paisOrigenSeleccionado(pais: any){
    console.log(pais);
    
    this.paisSeleccionado = pais;
    this.formulario.controls['paisOrigen'].setValue(this.paisSeleccionado);
  }

  


}
