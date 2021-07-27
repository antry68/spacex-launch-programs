import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterareaComponent } from './filterarea.component';

describe('FilterareaComponent', () => {
  let component: FilterareaComponent;
  let fixture: ComponentFixture<FilterareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
