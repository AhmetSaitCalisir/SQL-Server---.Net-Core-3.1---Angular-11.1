import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltMenuComponent } from './alt-menu.component';

describe('AltMenuComponent', () => {
  let component: AltMenuComponent;
  let fixture: ComponentFixture<AltMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
