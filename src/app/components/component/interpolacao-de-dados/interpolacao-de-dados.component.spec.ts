/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InterpolacaoDeDadosComponent } from './interpolacao-de-dados.component';

describe('InterpolacaoDeDadosComponent', () => {
  let component: InterpolacaoDeDadosComponent;
  let fixture: ComponentFixture<InterpolacaoDeDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolacaoDeDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolacaoDeDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
