/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CondicionaisComponent } from './condicionais.component';

describe('CondicionaisComponent', () => {
  let component: CondicionaisComponent;
  let fixture: ComponentFixture<CondicionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
