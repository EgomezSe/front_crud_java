import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelo/persona';
import { ServiceService } from 'src/app/Service/service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  persona: Persona = new Persona();
  constructor( private services: ServiceService, private router:Router) { }

  ngOnInit() {
  }

  Guardar(persona: Persona){
    this.services.createPersona(persona).
    subscribe(data =>{
      alert("Seagregocon Exito..!!");
      this.router.navigate(["listar"]);
      return true;
    });
    return false;
  }

}
