import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-change-detect-demo',
  standalone: true,
  imports: [],
  templateUrl: './change-detect-demo.component.html',
  styleUrl: './change-detect-demo.component.scss'
})
export class ChangeDetectDemoComponent {
  detail = {
    name: "Meezan",
    roll_no: 20,
    address: "Pune",
    position: "Lead"
  }

  constructor(
    private cdr: ChangeDetectorRef
  ) { 

  }
}
