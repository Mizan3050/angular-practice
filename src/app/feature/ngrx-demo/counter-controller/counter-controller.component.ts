import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controller',
  standalone: true,
  imports: [],
  templateUrl: './counter-controller.component.html',
  styleUrl: './counter-controller.component.scss'
})
export class CounterControllerComponent {
  constructor(private store: Store) {

  }

  increment() {
    this.store.dispatch(increment({value: 2}))
  }

  decrement() {
    this.store.dispatch(decrement({value: 2}))
  }
}
