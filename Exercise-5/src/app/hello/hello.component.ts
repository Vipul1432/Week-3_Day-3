import { Component } from '@angular/core';
// import {NestedComponent } from './nested.component'

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message: string = 'This message is from nested component!';
}
