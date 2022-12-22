/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmitindoEventosComponent } from './emitindo-eventos.component';

describe('EmitindoEventosComponent', () => {
  let component: EmitindoEventosComponent;
  let fixture: ComponentFixture<EmitindoEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitindoEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitindoEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
