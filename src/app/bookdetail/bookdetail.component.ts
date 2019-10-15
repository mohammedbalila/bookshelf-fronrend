import { Component, OnInit } from '@angular/core';
import {SendrequestService} from '../homeAuth/sendrequest.service'
import { Book } from '../cpanelAuth/cpanelclass';
import { CpanelService } from '../cpanelAuth/cpanel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../auth/auth.service';
import { BasketService } from '../basket/basket.service';
import { UIService } from '../shared/UI.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book: Book = new Book();
  bookLength : number;

  constructor(
  private sendrequestService : SendrequestService , 
  private cpanelService: CpanelService, 
  private route: ActivatedRoute,
  private snackBar: MatSnackBar,
  private router: Router,
  private auth : AuthService,
  private basket : BasketService,
  private ui: UIService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cpanelService.getBook(params.id).subscribe((res: any) => {
        this.book = res.book;
      }, (err) => {
        console.log(err);
      })

    })
  }


  openSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

  addToCartCheck(bookId: string) {
    this.basket.getCart().subscribe((res: any)=>{
      const cart = res.cart;
      const booksIds = cart.books.reduce((a, book) => {
        a.push(book._id);
        return a;
      }, []);
      if (booksIds.includes(bookId)) {
        this.openSnackBar('The book already exsists');
        return ;      
      }
      this.addToCart(bookId);
    });
  }
  // م مفروض يقدر يضيف الكتاب مرتين 
  // اي كتاب منو نسحة واحدة بس
  addToCart(bookId) {
    this.ui.loadingStateChanged.next(true);
    const userId = localStorage.getItem('_id');
    this.sendrequestService.addToCart(userId, bookId).subscribe((res) => {
      this.ui.loadingStateChanged.next(false);
      this.openSnackBar('The book was added');
      this.basket.getbookLength();
    }, (err) => {
      console.log(err);
    });
    
  }


  openBook(bookId) {
    this.router.navigate(['/user', 'bookdetail', bookId]);
  }
}
