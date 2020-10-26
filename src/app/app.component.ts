import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'boemia';
  currentBanner = {background: '#aa650b url(\'/assets/images/banner1.jpg\') no-repeat center'};

  ngOnInit() {
    const number = Math.random();
    if(number > .5) {
      this.currentBanner = {background: '#aa650b url(\'/assets/images/banner2.jpg\') no-repeat center'};
    }
  }
}
