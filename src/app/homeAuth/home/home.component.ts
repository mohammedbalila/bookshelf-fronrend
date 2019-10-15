import { Component, OnInit } from '@angular/core';
import { Requestbook } from '../request';
import { SendrequestService } from '../sendrequest.service'
import { Book } from '../../cpanelAuth/cpanelclass';
import { CpanelService } from '../../cpanelAuth/cpanel.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UIService } from 'src/app/shared/UI.service';
import { AuthService } from '../../auth/auth.service'
import { BasketService } from '../../basket/basket.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //user score
 // user : User = new this.user();
 user = {} as any;
 request: Requestbook = new Requestbook();
  books: Book[] = [];
  riwayat : Book[] = [];
  tnmia : Book[] = [];
  sira : Book[] = [];
  politic : Book[] = [];
  den : Book[] = [];
  lang : Book[] = [];
  olom : Book[] = [];
  news : Book[] = [];
cat = "5d848afbec077669242fb623";
  bookLength : number;
  constructor(
    private sendrequestService: SendrequestService,
    private cpanelService: CpanelService,
    private router: Router,
    private snackBar: MatSnackBar,
    private ui: UIService,
    private auth : AuthService,
    private basket : BasketService
  ) { }

  ngOnInit() {
    this.auth.getLoggedInUser().subscribe((response: any) => {
      console.log(response)
      this.user = response.user;
    }, (err: any) => {
      console.log(err);
    });
    

    
  
    
    this.cpanelService.getBooksbycategory("5d848afbec077669242fb623").subscribe((res) => {
      this.riwayat = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });
    
    this.cpanelService.getBooksbycategory("5d848c20ec077669242fb624").subscribe((res) => {
      this.tnmia = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });

    this.cpanelService.getBooksbycategory("5d848c46ec077669242fb625").subscribe((res) => {
      this.sira = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });
    this.cpanelService.getBooksbycategory("5d848c66ec077669242fb626").subscribe((res) => {
      this.politic = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });
    this.cpanelService.getBooksbycategory("5d848c77ec077669242fb627").subscribe((res) => {
      this.den = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });
    this.cpanelService.getBooksbycategory("5d848c86ec077669242fb628").subscribe((res) => {
      this.lang = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });
    this.cpanelService.getBooksbycategory("5d848c98ec077669242fb629").subscribe((res) => {
      this.olom = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });
    this.cpanelService.getBooksbycategory("5d848caaec077669242fb62a").subscribe((res) => {
      this.news = res.books.slice(0,8);
    }, (err) => {
      console.log(err);
    });
  
  }
  onSubmit(form) {

    this.sendrequestService.Requestbook(this.request).subscribe((response) => {
      console.log(response);

    });
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


openPage(a){
  this.router.navigate(['/user/book'], { queryParams: { category: a } });

}

}


