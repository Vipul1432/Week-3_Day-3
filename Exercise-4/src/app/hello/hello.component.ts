import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  //default color
  changeColors:string = 'blue';
  changeColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.changeColors = randomColor;
  }
}
