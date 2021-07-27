import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchitemcontainerComponent } from './launchitemcontainer.component';

describe('LaunchitemcontainerComponent', () => {
  let component: LaunchitemcontainerComponent;
  let fixture: ComponentFixture<LaunchitemcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchitemcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchitemcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
