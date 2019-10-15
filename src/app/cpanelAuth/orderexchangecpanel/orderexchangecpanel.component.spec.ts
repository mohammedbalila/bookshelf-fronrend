import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderexchangecpanelComponent } from './orderexchangecpanel.component';

describe('OrderexchangecpanelComponent', () => {
  let component: OrderexchangecpanelComponent;
  let fixture: ComponentFixture<OrderexchangecpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderexchangecpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderexchangecpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
