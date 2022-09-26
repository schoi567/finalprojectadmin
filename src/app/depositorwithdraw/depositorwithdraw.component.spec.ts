import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositorwithdrawComponent } from './depositorwithdraw.component';

describe('DepositorwithdrawComponent', () => {
  let component: DepositorwithdrawComponent;
  let fixture: ComponentFixture<DepositorwithdrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositorwithdrawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositorwithdrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
