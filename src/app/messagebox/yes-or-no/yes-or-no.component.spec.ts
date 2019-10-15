/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YesOrNoComponent } from './yes-or-no.component';

describe('YesOrNoComponent', () => {
  let component: YesOrNoComponent;
  let fixture: ComponentFixture<YesOrNoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesOrNoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesOrNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
