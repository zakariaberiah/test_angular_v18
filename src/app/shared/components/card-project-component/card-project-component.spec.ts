import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectComponent } from './card-project-component';

describe('CardProjectComponent', () => {
  let component: CardProjectComponent;
  let fixture: ComponentFixture<CardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
