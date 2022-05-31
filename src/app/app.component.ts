import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgAddress = 'https://angular.io/generated/images/guide/architecture/databinding.png';

  isUnchanged = true;

  expression = 'hejka';

  handleClick(){
    this.isUnchanged = !this.isUnchanged;
  }

  logElement(event: any){
    console.log(event.target);
  }
}
