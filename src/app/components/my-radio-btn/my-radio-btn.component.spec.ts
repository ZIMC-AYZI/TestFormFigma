import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadioBtnComponent } from './my-radio-btn.component';

describe('MyRadioBtnComponent', () => {
  let component: MyRadioBtnComponent;
  let fixture: ComponentFixture<MyRadioBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRadioBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRadioBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
