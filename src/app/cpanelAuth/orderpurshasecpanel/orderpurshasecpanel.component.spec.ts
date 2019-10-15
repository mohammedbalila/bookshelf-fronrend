import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderpurshasecpanelComponent } from './orderpurshasecpanel.component';

describe('OrderpurshasecpanelComponent', () => {
  let component: OrderpurshasecpanelComponent;
  let fixture: ComponentFixture<OrderpurshasecpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderpurshasecpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderpurshasecpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
