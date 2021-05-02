import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceformComponent } from './resourceform.component';

describe('ResourceformComponent', () => {
  let component: ResourceformComponent;
  let fixture: ComponentFixture<ResourceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
