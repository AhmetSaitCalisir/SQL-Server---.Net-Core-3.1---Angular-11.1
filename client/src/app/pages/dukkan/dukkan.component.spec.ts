import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukkanComponent } from './dukkan.component';

describe('DukkanComponent', () => {
  let component: DukkanComponent;
  let fixture: ComponentFixture<DukkanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukkanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukkanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
