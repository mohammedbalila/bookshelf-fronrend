import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutexchangeComponent } from './checkoutexchange.component';

describe('CheckoutexchangeComponent', () => {
  let component: CheckoutexchangeComponent;
  let fixture: ComponentFixture<CheckoutexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
