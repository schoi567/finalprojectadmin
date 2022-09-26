import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookrequestdecisionComponent } from './checkbookrequestdecision.component';

describe('CheckbookrequestdecisionComponent', () => {
  let component: CheckbookrequestdecisionComponent;
  let fixture: ComponentFixture<CheckbookrequestdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckbookrequestdecisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckbookrequestdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
