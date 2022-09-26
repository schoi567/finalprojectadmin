import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeblockComponent } from './changeblock.component';

describe('ChangeblockComponent', () => {
  let component: ChangeblockComponent;
  let fixture: ComponentFixture<ChangeblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeblockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
