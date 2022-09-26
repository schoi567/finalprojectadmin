import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferrequestchangeComponent } from './transferrequestchange.component';

describe('TransferrequestchangeComponent', () => {
  let component: TransferrequestchangeComponent;
  let fixture: ComponentFixture<TransferrequestchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferrequestchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferrequestchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
