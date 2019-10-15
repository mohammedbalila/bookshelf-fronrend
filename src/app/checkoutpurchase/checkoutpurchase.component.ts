import { HostListener, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { BasketService } from '../basket/basket.service';
import { Cart } from '../basket/basket.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from './order';

@Component({
    selector: 'app-checkoutpurchase',
    templateUrl: './checkoutpurchase.component.html',
    styleUrls: ['./checkoutpurchase.component.css']
})
export class CheckoutpurchaseComponent implements OnInit {
    type: any;
    user = {} as any;
    cart = new Cart();
    payment = { cash: false, points: false };
    param: any;
    xpPrice = 0;
    sdgPrice = 0;
    order = new Order();
    delivery: number = 60;
    constructor(private router: Router, private authService: AuthService, private cartService: BasketService, private route: ActivatedRoute , private auth : AuthService) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.param = params.payment;
            this.payment[this.param] = true;
        })

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

        this.cartService.getCart().subscribe((response: any) => {
            this.cart = response.cart;
            const { sdg, xp } = response.cart.books.reduce((all: any, item: any) => ({
                sdg: all.sdg + item.priceSdg,
                xp: all.xp + item.priceXp
            }),
                { sdg: 0, xp: 0 });
            this.sdgPrice = sdg;
            this.xpPrice = xp;

            if (this.payment['cash']) {
                this.order.priceSDG = sdg;;
                this.order.priceXP = 0;
                this.order.totalPrice = this.delivery + sdg;
            }
            if (this.payment['points']) {
                this.order.priceSDG = 0;
                this.order.priceXP = xp;
                this.order.totalPrice = this.delivery;
            }

        }, (err: any) => {
            console.log(err);
        });


    }

    onsubmit() {
        this.order.booksCount = this.cart.books.length;
        console.log(this.order);
        if (this.user.points < this.xpPrice && this.payment['points']) {
            console.log("sorry")
        }
  
        else {
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            ///
            ////
            /*
                        const a = this.user.points - this.order.priceXP;
            this.user.points = a;
            console.log(a);
            console.log(this.user.points);
            this.auth.update(this.user._id ,this.user).subscribe((response: any) => {
                console.log(response);
              })
              */
            this.cartService.getCart().subscribe((res: any) => {
                this.cart = res.cart;
                
            })
            this.cart.books.forEach(book => {
                console.log(book._id)
                this.cartService.removeFromCart(book._id).subscribe((response: any) => {
                    console.log(response);
                    this.cartService.getbookLength();
                })
            })
            this.order.type = "purchase";
            this.cartService.order(this.order).subscribe((res: any) => {
                console.log(res);
                this.router.navigate(['/user/status/']);

            })

        }
    }



}
