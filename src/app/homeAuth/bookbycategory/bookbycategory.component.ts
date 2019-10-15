import { Component, OnInit } from '@angular/core';
import { CpanelService } from '../../cpanelAuth/cpanel.service';
import { Book } from '../../cpanelAuth/cpanelclass';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UIService } from 'src/app/shared/UI.service';
import { AuthService } from '../../auth/auth.service';
import { BasketService } from '../../basket/basket.service';
import { Requestbook } from '../request';
import { SendrequestService } from '../sendrequest.service';
@Component({
  selector: 'app-bookbycategory',
  templateUrl: './bookbycategory.component.html',
  styleUrls: ['./bookbycategory.component.css']
})
export class BookbycategoryComponent implements OnInit {
  booksById : Book[] = [];
  name :string;
  cat : string;
  user = {} as any;
  request: Requestbook = new Requestbook();
  bookLength : number;

// category = [];
constructor(
  private sendrequestService: SendrequestService,
  private cpanelService: CpanelService,
  private router: Router,
  private snackBar: MatSnackBar,
  private ui: UIService,
  private auth : AuthService,
  private basket : BasketService,
  private route : ActivatedRoute
) { }
  ngOnInit() {
    this.auth.getLoggedInUser().subscribe((response: any) => {
      console.log(response)
      this.user = response.user;
    }, (err: any) => {
      console.log(err);
    });
    
    console.log(this.route.snapshot.queryParamMap.get('category'))
const id = this.route.snapshot.queryParamMap.get('category');
this.name = this.route.snapshot.queryParamMap.get('category');
    this.cpanelService.getBooksbycategory(id).subscribe((res)=>{
console.log(res);
this.booksById = res.books;
if(this.name == "5d848afbec077669242fb623"){
  this.cat = "الروايات"
}
if(this.name == "5d848c20ec077669242fb624"){
  this.cat =   "التنمية الذاتية"
}if(this.name == "5d848c46ec077669242fb625"){
  this.cat = "سيرة ذاتية "
}if(this.name == "5d848c66ec077669242fb626"){
  this.cat = " سياسة تاريخ اقتصاد"
}if(this.name == "5d848c77ec077669242fb627"){
  this.cat = " دينية"
}if(this.name == "5d848c86ec077669242fb628"){
  this.cat = " لغات"
}if(this.name == "5d848c98ec077669242fb629"){
  this.cat = " علمية وتعليمية"
}if(this.name == "5d848caaec077669242fb62a"){
  this.cat = " مجلات"
}

    })

/*
    this.cpanel.category(+id).subscribe((res)=>{
      console.log(res);
      this.category = res;
          })
    
  }
  */
 
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
console.log(a)
    this.router.navigate(['/user/book'], { queryParams: { category: a } });
    console.log(a)
    const id = a;
    this.name = a;
        this.cpanelService.getBooksbycategory(id).subscribe((res)=>{
    console.log(res);
    this.booksById = res.books;
    if(this.name == "5d848afbec077669242fb623"){
      this.cat = "الروايات"
    }
    if(this.name == "5d848c20ec077669242fb624"){
      this.cat =   "التنمية الذاتية"
    }if(this.name == "5d848c46ec077669242fb625"){
      this.cat = "سيرة ذاتية "
    }if(this.name == "5d848c66ec077669242fb626"){
      this.cat = " سياسة تاريخ اقتصاد"
    }if(this.name == "5d848c77ec077669242fb627"){
      this.cat = " دينية"
    }if(this.name == "5d848c86ec077669242fb628"){
      this.cat = " لغات"
    }if(this.name == "5d848c98ec077669242fb629"){
      this.cat = " علمية وتعليمية"
    }if(this.name == "5d848caaec077669242fb62a"){
      this.cat = " مجلات"
    }
    
        })
  }
}