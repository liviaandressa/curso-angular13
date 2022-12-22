/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RenderizacaoListasComponent } from './renderizacao-listas.component';

describe('RenderizacaoListasComponent', () => {
  let component: RenderizacaoListasComponent;
  let fixture: ComponentFixture<RenderizacaoListasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenderizacaoListasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderizacaoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
