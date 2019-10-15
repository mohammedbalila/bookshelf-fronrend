import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket/basket.service';
import { Router } from '@angular/router';
import {Xp} from './xp';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
exchange :number;
xp : any = new Xp () ;
a = 0;
b : any;
sdg : any;
point : any;
  constructor(private cart : BasketService , private router : Router) { }
  ngOnInit() {
  }

  
  onSubmit() { 
    this.exchange = this.exchange;
    this.router.navigate(['/user/checkoutexchange'], { queryParams: { bookscuont: this.exchange } });
    
  } 
  onxp(){
   this.a= this.xp.pages / 50;
   this.b =Math.round(this.a);
   console.log(this.b);
   this.sdg = (this.b * 5) + 10 ;
   console.log(this.sdg);
   switch(this.xp.state){
     case '2' : 
       this.sdg = this.sdg - 15 ;
       console.log(this.sdg)

       break;
     case '3' : 
      this.sdg = this.sdg - 20 ;
      console.log(this.sdg)
      break;
    
   }
   if(this.xp.size == 2){
		this.sdg = this.sdg - 20 ;
    console.log(this.sdg)

	}
	if(this.xp.size == 3){
		this.sdg = this.sdg / 10 ;
    console.log(this.sdg)

	}
	 if(this.sdg<0){
     this.sdg = 3 ;
     console.log(this.sdg)

   }
   
   this.point = this.sdg * 2 ;
   console.log(this.sdg)

   
   console.log(this.point);

  }
}
