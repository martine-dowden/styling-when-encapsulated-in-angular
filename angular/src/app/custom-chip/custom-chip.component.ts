import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-chip',
  templateUrl: './custom-chip.component.html',
  styleUrls: ['./custom-chip.component.css']
})
export class CustomChipComponent {

  @Input() label;
  @Input() img;

}
