import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  item = '';

  @Output()
  fruitEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log(this.item);
    this.fruitEvent.emit(this.item);
  }

  handleChange(event: any){
    console.log(event.target.value);
    this.item = event.target.value;
  }

}
