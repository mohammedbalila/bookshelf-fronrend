import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../app.globals';
import { Cart } from '../basket/basket.model';

@Injectable({
    providedIn: 'root'
})
export class BasketService {
    constructor(private http: HttpClient, private globals: GlobalService) { }
    a = false;
    b = false;
    c = false;
    cart : any = new Cart();

    bookLength :number =0;
    getCart() {
        const id = localStorage.getItem('_id');
        return this.http.get(`${this.globals.apiUrl}users/${id}/cart/`)
            
    } 


    removeFromCart(bookId: string) {
        return this.http.post(`${this.globals.apiUrl}users/remove_from_cart/`, { bookId });
    }

    purshasetypeone() {
        return this.a;

    }
    purshasetypetwo() {
        return this.b;


    }
    purshasetypethree() {
        return this.c;


    }

    order(order){
        return this.http.post(`${this.globals.apiUrl}users/orders/` , {...order, type: "purchase"})
    }
    orderex(order){
        return this.http.post(`${this.globals.apiUrl}users/orders/` , {...order, type: "trading"})
    }
 
    removeAllFromCart(bookId: string){
        return this.http.post(`${this.globals.apiUrl}users/remove_from_cart/` , { bookId })
    }

    getorder(){
        return this.http.get(`${this.globals.apiUrl}users/orders/?type=purchase` )

    }
    cancel(id){
        return this.http.post(`${this.globals.apiUrl}users/cancel_order/${id}` , id)

    }
    getorderex(){
        return this.http.get(`${this.globals.apiUrl}users/orders/?type=trading` )

    }
    getorderuser(id){
        return this.http.get(`${this.globals.apiUrl}users/${id}/orders/?type=purchase` )

    }
    getorderexuser(id){
        return this.http.get(`${this.globals.apiUrl}users/${id}/orders/?type=trading` )

    }

getbookLength(){
    const id = localStorage.getItem('_id');
    return this.http.get(`${this.globals.apiUrl}users/${id}/cart/`)
    .subscribe((res : any)=>{
        this.cart = res.cart;
        this.bookLength = this.cart.books.length;
        
    });

}

}
