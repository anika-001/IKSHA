import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesiteComponent } from './profilesite.component';

describe('ProfilesiteComponent', () => {
  let component: ProfilesiteComponent;
  let fixture: ComponentFixture<ProfilesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
