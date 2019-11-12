import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitFormComponent } from './trait-form.component';

describe('TraitFormComponent', () => {
  let component: TraitFormComponent;
  let fixture: ComponentFixture<TraitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
