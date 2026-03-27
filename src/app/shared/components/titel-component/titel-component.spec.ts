import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitelComponent } from './titel-component';

describe('TitelComponent', () => {
  let component: TitelComponent;
  let fixture: ComponentFixture<TitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
