import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatMapComponent } from './flat-map.component';

describe('FlatMapComponent', () => {
  let component: FlatMapComponent;
  let fixture: ComponentFixture<FlatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
