import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Input()  item: any;
  @Output() onChange = new EventEmitter();
  
  handleClick(){
    this.onChange.emit('omg sportowy swirze');
  }

}
