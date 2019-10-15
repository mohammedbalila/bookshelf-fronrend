import { Component, OnInit } from '@angular/core';
import { CpanelService } from '../cpanel.service';
import {Order } from '../cpanelclass';
@Component({
  selector: 'app-orderpurshasecpanel',
  templateUrl: './orderpurshasecpanel.component.html',
  styleUrls: ['./orderpurshasecpanel.component.css']
})
export class OrderpurshasecpanelComponent implements OnInit {
  order :any = new Order();

  constructor(private cpanel : CpanelService) { }

  ngOnInit() {
    this.cpanel.getorder().subscribe((res : any) =>{
      console.log(res);
      this.order = res.orders;

    })

  }




}
 