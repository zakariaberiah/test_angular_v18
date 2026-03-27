import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologieCard } from './technologie-card';

describe('TechnologieCard', () => {
  let component: TechnologieCard;
  let fixture: ComponentFixture<TechnologieCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologieCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologieCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
