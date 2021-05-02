import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleducatorsComponent } from './localeducators.component';

describe('LocaleducatorsComponent', () => {
  let component: LocaleducatorsComponent;
  let fixture: ComponentFixture<LocaleducatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaleducatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleducatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
