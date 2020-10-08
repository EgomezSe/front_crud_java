import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Persona } from 'src/app/modelo/persona'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){



    this.service.getPersonas().subscribe(data => {
      console.log(data);
      this.personas = data;
    },
      (error) => {
      console.log(error);
      this.personas = [{
        idPersona: 1,
        nombre: 'Edwar',
        apellido: 'Gomez',
        email: 'edwar@gmail.com',
        telefono: '123123213'
      },
      {
        idPersona: 2,
        nombre: 'Andrea',
        apellido: 'Gonzalez',
        email: 'andrea@gmail.com',
        telefono: '123123213'
      },
      {
        idPersona: 3,
        nombre: 'Alejandro',
        apellido: 'Gonzalez',
        email: 'alejandro@gmail.com',
        telefono: '245325325'
      }]
    });
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id",persona.idPersona.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(persona:Persona){
    this.service.deletePersona(persona).
    subscribe(data=>{
      this.personas = this.personas.filter(p=>p!==persona);
      alert("Usuario eliminado...");
    })
  }

}
