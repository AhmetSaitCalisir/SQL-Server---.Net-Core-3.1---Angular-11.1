import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukkanGuncelleComponent } from './dukkan-guncelle.component';

describe('DukkanGuncelleComponent', () => {
  let component: DukkanGuncelleComponent;
  let fixture: ComponentFixture<DukkanGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukkanGuncelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukkanGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
