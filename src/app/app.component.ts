import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_tutorial';
  temp="siema";

  handleChange(event: any){
    console.log(event.target.value)
    this.temp = event.target.value;
  }
}
