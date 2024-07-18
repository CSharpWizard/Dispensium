import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensaryDetailComponent } from './dispensary-detail.component';

describe('DispensaryDetailComponent', () => {
  let component: DispensaryDetailComponent;
  let fixture: ComponentFixture<DispensaryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DispensaryDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DispensaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
