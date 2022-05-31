import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  property1 = 'Apple';
  property2 = 'Orange';
  property3 = 'Banana';
  property4 = 'Grape';
  property5 = 'Coconut';
  property6 = 'Watermelon';

  cars = [
    'Honda Civic', 
    'Citroen Saxo',
    'Toyota Celica',
    'Subaru Impreza',
    'Mitsubishi Evo Lancer'
  ]
}
