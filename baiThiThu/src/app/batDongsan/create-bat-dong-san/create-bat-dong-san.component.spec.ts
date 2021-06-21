import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBatDongSanComponent } from './create-bat-dong-san.component';

describe('CreateBatDongSanComponent', () => {
  let component: CreateBatDongSanComponent;
  let fixture: ComponentFixture<CreateBatDongSanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBatDongSanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBatDongSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
