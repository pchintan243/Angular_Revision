import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.css']
})
export class Cmp3Component {
  @Input()
  listItem: { id: number, inStock: boolean };
}
