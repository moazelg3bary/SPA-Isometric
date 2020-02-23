import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
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
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
