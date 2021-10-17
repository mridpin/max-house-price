import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaPanelComponent } from './formula-panel.component';

describe('FormulaPanelComponent', () => {
  let component: FormulaPanelComponent;
  let fixture: ComponentFixture<FormulaPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
