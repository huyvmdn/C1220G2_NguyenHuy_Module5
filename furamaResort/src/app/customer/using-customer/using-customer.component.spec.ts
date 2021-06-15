import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsingCustomerComponent} from './using-customer.component';

describe('UsingCustomerComponent', () => {
  let component: UsingCustomerComponent;
  let fixture: ComponentFixture<UsingCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsingCustomerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
