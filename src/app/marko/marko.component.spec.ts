import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkoComponent } from './marko.component';

describe('MarkoComponent', () => {
  let component: MarkoComponent;
  let fixture: ComponentFixture<MarkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
