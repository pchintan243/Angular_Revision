import { Component } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component {
  myName: string = 'chintan patel';

  listItem = [
    {
      id: 1,
      inStock: true
    },
    {
      id: 2,
      inStock: false
    },
    {
      id: 3,
      inStock: true
    },
    {
      id: 4,
      inStock: false
    },
    {
      id: 5,
      inStock: true
    },
    {
      id: 6,
      inStock: false
    },
    {
      id: 7,
      inStock: false
    },
    {
      id: 8,
      inStock: false
    },
    {
      id: 9,
      inStock: true
    },
    {
      id: 10,
      inStock: true
    },
    {
      id: 11,
      inStock: false
    },
    {
      id: 12,
      inStock: false
    },
  ]
  getAll() {
    return this.listItem.length;
  }
  getHalf() {
    return this.listItem.filter(p => p.inStock === true).length;
  }
  getMinor() {
    return this.listItem.filter(p => p.inStock === false).length;
  }

  selectedButtonParent: string = 'all';

  onFilterButton(value: string) {
    console.log(value);
    this.selectedButtonParent = value;
  }

}
