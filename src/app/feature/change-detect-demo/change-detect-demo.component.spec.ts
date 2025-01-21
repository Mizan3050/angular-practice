import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectDemoComponent } from './change-detect-demo.component';

describe('ChangeDetectDemoComponent', () => {
  let component: ChangeDetectDemoComponent;
  let fixture: ComponentFixture<ChangeDetectDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
