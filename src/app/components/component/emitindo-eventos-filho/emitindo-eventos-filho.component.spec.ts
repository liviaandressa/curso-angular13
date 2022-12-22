/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmitindoEventosFilhoComponent } from './emitindo-eventos-filho.component';

describe('EmitindoEventosFilhoComponent', () => {
  let component: EmitindoEventosFilhoComponent;
  let fixture: ComponentFixture<EmitindoEventosFilhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmitindoEventosFilhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmitindoEventosFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
