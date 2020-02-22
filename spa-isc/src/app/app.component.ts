import { Component, AfterViewChecked } from '@angular/core';
import { trigger, transition, style, animate, group, query } from '@angular/animations';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css", "app.component.ar.css"],
  animations: [
    trigger("animate-component", [
      transition(
        // start animate form all component not pageComponent 
        "0 => 1, 1 => 0, 0 => 2, 2 => 0, 0 => 3, 3 => 0, 1 => 2, 2 => 1, 1 => 3, 3 => 1, 2 => 3, 3 => 2", [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate(500, style({
              transform: 'translateX(0%)'
            }))
          ]),
          query(':leave', [
            style({
              transform: 'translateX(0%)'
            }),
            style({
              opacity: 0
            }),
            animate(500, style({
              transform: 'translateX(-100%)'
            })),
            animate(500, style({
              opacity: 0
            }))
          ])
        ])
      ]),
      // start animate form from all component to pageComponent
      transition( "0 => 4, 4 => 0, 1 => 4, 2 => 4, 3 => 4", [
        group([
          query(':enter', [
            style({
              transform: 'scale(0)'
            }),
            animate(500, style({
              transform: 'scale(1)'
            }))
          ]),
        ])
      ]),
      // start animate form from pageComponent to all component
      transition("4 => 1, 4 => 2, 4 => 3", [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate(500, style({
              transform: 'translateX(0)'
            }))
          ]),
        ])
      ])
    ])
  ]
})
export class AppComponent implements AfterViewChecked {

  // start vars
  scrollDown;

  onload: Boolean = true;

  constructor() {
    // when window scrolY function work
    window.onscroll = () => {
      this.scrollDown = window.pageYOffset;
    }
    
  }
  ngAfterViewChecked() {

    window.onload = ()=> {

      this.onload = false

    }

  }
}
