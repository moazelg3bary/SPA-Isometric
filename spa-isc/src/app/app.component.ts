import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scrollDown;

  constructor() {
    window.onscroll = () => {
      this.scrollDown = window.pageYOffset;
      console.log(this.scrollDown)
    }
  }
}
