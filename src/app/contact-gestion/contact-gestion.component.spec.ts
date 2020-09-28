import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactGestionComponent } from './contact-gestion.component';

describe('ContactGestionComponent', () => {
  let component: ContactGestionComponent;
  let fixture: ComponentFixture<ContactGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
