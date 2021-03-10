import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukkanKartComponent } from './dukkan-kart.component';

describe('DukkanKartComponent', () => {
  let component: DukkanKartComponent;
  let fixture: ComponentFixture<DukkanKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukkanKartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukkanKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
