


import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Order , Trading } from '../checkoutpurchase/order';
import { BasketService } from '../basket/basket.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],

})

export class StatusComponent implements OnInit {
  user = {} as any;
  order = new Order();
  trading = new Trading();
  value1 = 0;
  bufferValue1 = 0;

  value2 = 0;
  bufferValue2 = 0;
  mode = 'buffer';
  delivery = 60;
  /*
  isLinear = false;

  isEditable = false;
  com = true;
  */

  constructor(private cart: BasketService, private authService: AuthService , private router : Router) {
  }

  ngOnInit() {
    this.authService.getLoggedInUser().subscribe((response: any) => {
      console.log(response)

      this.user = response.user;
      console.log(this.user.address.locality)
      if (this.user.address.locality == "جبل اولياء") {
        this.delivery = 95;
    }
    if (this.user.address.locality == "بحري") {
        this.delivery = 75;
    }
    if (this.user.address.locality == "امدرمان") {
        this.delivery = 95;
    }
    if (this.user.address.locality == "شرق النيل") {
        this.delivery = 95;
    }
    if (this.user.address.locality == "ام بدة") {
        this.delivery = 95;
    }
    if (this.user.address.locality == "كرري") {
        this.delivery = 95;
    }
    if (this.user.address.locality == "الخرطوم") {
        this.delivery = 75;
    }

    }, (err: any) => {
      console.log(err);
    });
    this.cart.getbookLength();
    this.authService.getLoggedInUser().subscribe((response: any) => {
      console.log(response)
      this.user = response.user;
    }, (err: any) => {
      console.log(err);
    });
    const id = localStorage.getItem('_id');
    this.cart.getorderuser(id).subscribe((res: any) => {
      console.log(res)
      this.order = res.orders;
      console.log(this.order)


    }
    )
    this.cart.getorderexuser(id).subscribe((res: any) => {
      console.log(res)
      this.trading = res.orders;
      console.log(this.trading)


    }
    )
    /*
    if(this.order.status === "processing" && this.order.type== "purchase" ){
      this.value1 = 40 ;
      this.bufferValue1 = 100 ;
      }
      else if(this.order.going =="going" && this.order.type== "purchase" ){
        this.value1 = 80 ;
        this.bufferValue1 = 90 ;
        }
        else if(this.order.going =="finshed" && this.order.type== "purchase" ){
          this.value1 = 100 ;
          this.bufferValue1 = 100 ;
          }
    
      
          if(this.trading.status =="processing" && this.order.type== "trading" ){
            this.value2 = 40 ;
            this.bufferValue2 = 50 ;
            }
           else if(this.trading.going =="going" && this.order.type== "trading" ){
              this.value2 = 80 ;
              this.bufferValue2 = 90 ;
              }
             else if(this.trading.going =="finshed" && this.order.type== "trading" ){
                this.value2 = 100 ;
                this.bufferValue2 = 100 ;
                }
    
    */
  }
cancel(id){
  this.cart.cancel(id).subscribe((res: any) => {
    console.log(res);
    this.router.navigate(['/user/home/']);

  },(err)=>{
    console.log(err);
  });

     
}















}
