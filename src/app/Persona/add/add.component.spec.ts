import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/modelo/persona';
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppError } from '../../common/app-error';



describe('AddComponent', () => {
  
/**
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let persona:Persona = new Persona();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('prueba  persona', (() => {
    persona.nombre = "Edwar";
    expect(persona.nombre).toEqual("Edwar");
  }));

  it('prueba Creacion persona', (() => {
    persona.nombre = "Edwar";
    persona.apellido = "Gomez";
    persona.email = "edwarg78@gmail.com"
    persona.telefono = "12323423";
    expect(true).toEqual(true);
  }));

  it('should create', () => {
    expect(component).toBeUndefined();
  });
  */
});
