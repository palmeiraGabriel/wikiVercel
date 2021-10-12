import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JakartaServletComponent } from './jakarta-servlet.component';

describe('JakartaServletComponent', () => {
  let component: JakartaServletComponent;
  let fixture: ComponentFixture<JakartaServletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JakartaServletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JakartaServletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
