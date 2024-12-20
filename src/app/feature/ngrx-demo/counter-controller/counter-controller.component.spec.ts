import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterControllerComponent } from './counter-controller.component';

describe('CounterControllerComponent', () => {
  let component: CounterControllerComponent;
  let fixture: ComponentFixture<CounterControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
