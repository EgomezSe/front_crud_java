import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';


describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let router = {
        navigate: jasmine.createSpy('navigate')
      }
    
    beforeEach(
        (() => {
          TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [RouterTestingModule.withRoutes([])],
            schemas: [NO_ERRORS_SCHEMA]
          }).compileComponents();
        })
      );

      

      beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should have a router outlet', (() => {
          const element = fixture.debugElement.query(By.directive(RouterOutlet));
          expect(element).not.toBeNull();
        }));

       it('test listar', (()=>{
            expect(component.Listar()).toEqual(true);
        }));

        it('test nuevo', (()=>{
            expect(component.Nuevo()).toEqual(true);
        }));
});
