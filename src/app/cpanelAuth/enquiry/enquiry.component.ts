import { Component, OnInit } from '@angular/core';
import { CpanelService } from '../cpanel.service';
import {Order } from '../cpanelclass';
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
order :Order = new Order();
user = {} as any;
id : any;
  constructor(private cpanel : CpanelService ) { }

  ngOnInit() {
 
  } 



  getuser(){
    this.id = this.id;
    this.cpanel.getusers(this.id).subscribe((res :any) => {
      this.user = res.user; 
      console.log(res)
    }, (err) =>{
      console.log(err);
    }
    
      )
  }

}
