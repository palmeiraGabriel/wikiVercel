import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerProgrammingComponent } from './computer-programming.component';

describe('ComputerProgrammingComponent', () => {
  let component: ComputerProgrammingComponent;
  let fixture: ComponentFixture<ComputerProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerProgrammingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
