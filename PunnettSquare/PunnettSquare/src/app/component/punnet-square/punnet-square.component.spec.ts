import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PunnetSquareComponent } from './punnet-square.component';

describe('PunnetSquareComponent', () => {
  let component: PunnetSquareComponent;
  let fixture: ComponentFixture<PunnetSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PunnetSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PunnetSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
