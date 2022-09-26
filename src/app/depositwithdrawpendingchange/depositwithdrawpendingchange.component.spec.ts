import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositwithdrawpendingchangeComponent } from './depositwithdrawpendingchange.component';

describe('DepositwithdrawpendingchangeComponent', () => {
  let component: DepositwithdrawpendingchangeComponent;
  let fixture: ComponentFixture<DepositwithdrawpendingchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositwithdrawpendingchangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositwithdrawpendingchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
