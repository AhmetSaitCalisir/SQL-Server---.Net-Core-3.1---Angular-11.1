import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnasayfaKartComponent } from './anasayfa-kart.component';

describe('AnasayfaKartComponent', () => {
  let component: AnasayfaKartComponent;
  let fixture: ComponentFixture<AnasayfaKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnasayfaKartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnasayfaKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
