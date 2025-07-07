import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCpComponent } from './form-cp.component';

describe('FormCpComponent', () => {
  let component: FormCpComponent;
  let fixture: ComponentFixture<FormCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
