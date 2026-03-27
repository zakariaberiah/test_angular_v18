import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContanteComponent } from './main-contante-component';

describe('MainContanteComponent', () => {
  let component: MainContanteComponent;
  let fixture: ComponentFixture<MainContanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainContanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainContanteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
