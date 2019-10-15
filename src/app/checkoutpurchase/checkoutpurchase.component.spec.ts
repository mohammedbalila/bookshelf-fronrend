import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutpurchaseComponent } from './checkoutpurchase.component';

describe('CheckoutpurchaseComponent', () => {
  let component: CheckoutpurchaseComponent;
  let fixture: ComponentFixture<CheckoutpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
