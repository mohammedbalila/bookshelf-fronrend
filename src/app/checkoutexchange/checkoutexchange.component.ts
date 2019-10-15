import { Component, OnInit , } from '@angular/core';
import { Order } from '../checkoutpurchase/order';
import { Router, ActivatedRoute } from '@angular/router';
import { Cart } from '../basket/basket.model';
import { BasketService } from '../basket/basket.service';
import { AuthService } from '../auth/auth.service';




@Component({
  selector: 'app-checkoutexchange',
  templateUrl: './checkoutexchange.component.html',
  styleUrls: ['./checkoutexchange.component.css']
})
export class CheckoutexchangeComponent implements OnInit {
  user = {} as any;
  cart = new Cart();
  bookscount :any = 0;
  param: number; 
  order = new Order();
a : number;
   constructor(private router : Router , private route: ActivatedRoute , private cartService : BasketService , private auth : AuthService ) { }
 
     ngOnInit() {
       this.order.type = "trading" ;
       console.log(this.route.snapshot.queryParamMap.get('bookscuont'))
   this.a = +this.route.snapshot.queryParamMap.get('bookscuont');
    this.order.booksCount = this.a;
     this.auth.getLoggedInUser().subscribe((response: any) => {
      console.log(response)
      this.user = response.user;
    }, (err: any) => {
      console.log(err);
    });
  
     }

     onsubmit() {
    /*  this.order.booksCount= this.cart.books.length;
  console.log(this.order);
  */
 this.order.type = "trading";
 this.order.priceSDG= 0;
    this.order.priceXP= 0;
    this.order.totalPrice= 0;
    this.order.booksCount = this.a;

      this.cartService.orderex(this.order).subscribe((res:any) =>{
  console.log(res);
  this.router.navigate(['/user/status/']);
  
  
  
      })
    
  
  }
 

 
 }
 