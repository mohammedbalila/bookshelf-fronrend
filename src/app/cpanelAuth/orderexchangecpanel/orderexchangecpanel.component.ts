import { Component, OnInit } from '@angular/core';
import { CpanelService } from '../cpanel.service';
import {Order } from '../cpanelclass';
@Component({
  selector: 'app-orderexchangecpanel',
  templateUrl: './orderexchangecpanel.component.html',
  styleUrls: ['./orderexchangecpanel.component.css']
})
export class OrderexchangecpanelComponent implements OnInit {
  order :Order = new Order();

  constructor() { }

  ngOnInit() {
    
  }

}
