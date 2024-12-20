import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from "./feature/ngrx-demo/counter-output/counter-output.component";
import { CounterControllerComponent } from "./feature/ngrx-demo/counter-controller/counter-controller.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterOutputComponent, CounterControllerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-practice';
}
