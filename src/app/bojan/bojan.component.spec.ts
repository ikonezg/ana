import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BojanComponent } from './bojan.component';

describe('BojanComponent', () => {
  let component: BojanComponent;
  let fixture: ComponentFixture<BojanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BojanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BojanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
