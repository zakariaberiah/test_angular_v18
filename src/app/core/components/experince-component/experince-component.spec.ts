import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperinceComponent } from './experince-component';

describe('ExperinceComponent', () => {
  let component: ExperinceComponent;
  let fixture: ComponentFixture<ExperinceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperinceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperinceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
