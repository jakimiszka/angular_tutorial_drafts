import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgAddress = 'https://angular.io/generated/images/guide/architecture/databinding.png';

  isUnchanged = true;

  handleClick(){
    this.isUnchanged = !this.isUnchanged;
  }
}
