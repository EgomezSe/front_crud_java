import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeronasComponent } from './peronas.component';

describe('PeronasComponent', () => {
  let component: PeronasComponent;
  let fixture: ComponentFixture<PeronasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeronasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeronasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Prueba suma', ()=>{
    expect(component.suma(1,2)).toEqual(3);
  });

  it('Prueba resta', ()=>{
    expect(component.resta(1,2)).toEqual(-1);
  });
});
