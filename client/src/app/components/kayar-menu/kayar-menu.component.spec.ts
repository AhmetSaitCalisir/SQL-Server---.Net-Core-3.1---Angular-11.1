import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayarMenuComponent } from './kayar-menu.component';

describe('KayarMenuComponent', () => {
  let component: KayarMenuComponent;
  let fixture: ComponentFixture<KayarMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KayarMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KayarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
