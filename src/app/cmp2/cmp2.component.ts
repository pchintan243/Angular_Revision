import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component {
  // @Input()
  // myNameFrom: string = '';

  @Input()
  all: number = 0;

  @Input()
  half: number = 0;

  @Input()
  minor: number = 0;

  selectedButton: string = 'all';

  @Output()
  onChangeButton: EventEmitter<string> = new EventEmitter<string>();

  buttonChange() {
    console.log('child');
    
    this.onChangeButton.emit(this.selectedButton);
  }
}
