import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../app.component.ar.css'],
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
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
