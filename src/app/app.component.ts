import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items = [
    'Apple',
    'Banana',
    "Grape",
    'Orange'
  ]

  handleAddNewItem(item: string){
    this.items.push(item);
  }
}
