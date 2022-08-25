import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;

  incrementCounter():void {
    this.counter +=1;
  }

  decrementCounter():void {
    this.counter -=1;
  }

names:string[] = ['George', 'Kyla', 'Julie']
}
