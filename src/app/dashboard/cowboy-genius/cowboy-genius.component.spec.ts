import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowboyGeniusComponent } from './cowboy-genius.component';

describe('CowboyGeniusComponent', () => {
  let component: CowboyGeniusComponent;
  let fixture: ComponentFixture<CowboyGeniusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowboyGeniusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CowboyGeniusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
