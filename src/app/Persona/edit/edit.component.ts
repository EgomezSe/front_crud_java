import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { Persona } from 'src/app/modelo/persona';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id).
    subscribe(data=>{
      this.persona=data;
    });
  }

  Actualizar(persona:Persona){
    this.service.updatPersona(persona).
    subscribe(data=>{
      this.persona=data;
      alert("Se Actualizo con exito....!!");
      this.router.navigate(["listar"]);
    });
  }

}
