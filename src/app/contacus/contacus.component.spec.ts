import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacusComponent } from './contacus.component';

describe('ContacusComponent', () => {
  let component: ContacusComponent;
  let fixture: ComponentFixture<ContacusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
