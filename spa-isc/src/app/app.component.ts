import { Component, AfterViewChecked } from '@angular/core';
import { trigger, transition, style, animate, group, query } from '@angular/animations';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
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
