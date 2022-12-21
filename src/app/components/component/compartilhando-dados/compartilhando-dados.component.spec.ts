/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompartilhandoDadosComponent } from './compartilhando-dados.component';

describe('CompartilhandoDadosComponent', () => {
  let component: CompartilhandoDadosComponent;
  let fixture: ComponentFixture<CompartilhandoDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompartilhandoDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompartilhandoDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
