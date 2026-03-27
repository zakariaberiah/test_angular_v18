import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponenet } from './nav-bar-componenet';

describe('NavBarComponenet', () => {
  let component: NavBarComponenet;
  let fixture: ComponentFixture<NavBarComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
