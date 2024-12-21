import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from "./feature/ngrx-demo/counter-output/counter-output.component";
import { CounterControllerComponent } from "./feature/ngrx-demo/counter-controller/counter-controller.component";
import { Store } from '@ngrx/store';
import { init } from './feature/ngrx-demo/store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterOutputComponent, CounterControllerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'angular-practice';

  constructor(private store: Store){

  }
  ngOnInit(): void {
    this.store.dispatch(init())
  }
}
