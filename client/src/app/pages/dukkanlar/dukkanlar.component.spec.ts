import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DukkanlarComponent } from './dukkanlar.component';

describe('DukkanlarComponent', () => {
  let component: DukkanlarComponent;
  let fixture: ComponentFixture<DukkanlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DukkanlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DukkanlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
