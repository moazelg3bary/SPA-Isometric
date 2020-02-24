import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css', '../../app.component.ar.css'],
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
    var btn: any = document.getElementsByClassName('btn-link');
    for (let i = 0; i < btn.length; i ++) {
      btn[i].onclick = ()=> {
        'use strict'
        let x = document.getElementsByClassName('collapse');
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove('show')
        }
        let collapse: any = document.getElementById(btn[i].getAttribute('data-target')).classList.add('show')
      }
    }
  }
}
