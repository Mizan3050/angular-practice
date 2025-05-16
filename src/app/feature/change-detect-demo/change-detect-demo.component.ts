import { ChangeDetectorRef, Component } from '@angular/core';
import { CustomNgIfDirective } from '../../shared/directives/custom-ng-if.directive';

@Component({
  selector: 'app-change-detect-demo',
  standalone: true,
  imports: [CustomNgIfDirective],
  templateUrl: './change-detect-demo.component.html',
  styleUrl: './change-detect-demo.component.scss'
})
export class ChangeDetectDemoComponent {
  show = false;
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
  updateShow() {
    this.show = !this.show
    console.log(this.show);
  }
}
