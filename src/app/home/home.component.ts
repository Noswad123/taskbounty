import { Component, OnInit } from '@angular/core';
import { Bounty } from '../models/bounty';
import { Bounties } from '../data/bounty.data';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  bounties = Bounties;
  view = "list_view";
  lat: number = 29.7604;
  lng: number = -95.3698;
  constructor() { }

  ngOnInit() {
  }
  changeView() {
    if (this.view == "list_view") {
      this.view = "map_view"
    } else {
      this.view = "list_view"
    }
  }


}
