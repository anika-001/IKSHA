import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamupcardsComponent } from './teamupcards.component';

describe('TeamupcardsComponent', () => {
  let component: TeamupcardsComponent;
  let fixture: ComponentFixture<TeamupcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamupcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamupcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
