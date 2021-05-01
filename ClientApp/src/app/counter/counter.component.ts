import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['counterStyle.css']
})
export class CounterComponent {
  public currentCount = 0;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  public name = this.currentCount < 10 ? 'Ana' : 'Alex';

  public incrementCounter() {
    this.currentCount++;
    this.name = this.currentCount < 10 ? 'Ana' : 'Alex';
  }
}

