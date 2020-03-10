import { Component, OnInit } from '@angular/core';
import * as dateFns from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  timeOfDay: Date = new Date();
  timeString: string = '12:00';

  constructor() {}

  ngOnInit() {
    this.timeString = dateFns.format(this.timeOfDay, 'h:mm A');
  }

}
