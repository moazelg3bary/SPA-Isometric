import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css', '../../app.component.ar.css'],
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
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
