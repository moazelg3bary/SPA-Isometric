import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('overlay', [
      transition('void => *', [
          style({
            display: 'block',
          }),
          animate(2000, style({}))
      ])
    ])
  ]
})
export class HomeComponent {

  constructor() {}

}
