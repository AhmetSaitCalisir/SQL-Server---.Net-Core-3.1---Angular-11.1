import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukkanEkleComponent } from './dukkan-ekle.component';

describe('DukkanEkleComponent', () => {
  let component: DukkanEkleComponent;
  let fixture: ComponentFixture<DukkanEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukkanEkleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukkanEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
