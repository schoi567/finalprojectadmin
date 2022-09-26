import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookrequestComponent } from './checkbookrequest.component';

describe('CheckbookrequestComponent', () => {
  let component: CheckbookrequestComponent;
  let fixture: ComponentFixture<CheckbookrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckbookrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckbookrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
