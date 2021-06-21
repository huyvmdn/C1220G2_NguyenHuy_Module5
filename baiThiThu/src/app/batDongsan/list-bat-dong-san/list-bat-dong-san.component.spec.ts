import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBatDongSanComponent } from './list-bat-dong-san.component';

describe('ListBatDongSanComponent', () => {
  let component: ListBatDongSanComponent;
  let fixture: ComponentFixture<ListBatDongSanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBatDongSanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBatDongSanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
