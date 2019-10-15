import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { Cart } from './basket.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  selectValue : string 
  a = false;
  b = false;
  c = false;
  cart = new Cart();
  xpPrice = 0;
  sdgPrice = 0;
  bookLength =0;

  constructor(private basketService: BasketService, private router: Router) { }

  ngOnInit() {
    this.getCarts();
  }

  getCarts(): void {
    this.basketService.getCart().subscribe((response: any) => {
      this.cart = response.cart;
      const { sdg, xp } = response.cart.books.reduce((all: any, item: any) => ({
        sdg: all.sdg + item.priceSdg,
        xp: all.xp + item.priceXp
      }),
        { sdg: 0, xp: 0 });
      this.sdgPrice = sdg;
      this.xpPrice = xp;
      this.bookLength = this.cart.books.length;
this.basketService.bookLength = this.bookLength;
this.basketService.getbookLength(); 
    });
  }


  removeFromCart(bookId: string): void {
    this.basketService.removeFromCart(bookId).subscribe((response: any) => {
      console.log(response);
      this.getCarts();
    }, (err: any) => {
      console.log(err);
    });
  }



  purshasetypeone(aa) {
    console.log(aa);
    if (aa == 1) {
      this.router.navigate(['/user/checkoutpurchase'], { queryParams: { payment: 'cash' } });

    }
    if (aa == 2) {
      this.router.navigate(['/user/checkoutpurchase'], { queryParams: { payment: 'points' } });
    }
    if (aa == 3) {
      this.basketService.c = true

    }
  }

}
