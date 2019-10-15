import { Injectable } from '@angular/core';
import { GlobalService } from '../app.globals';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Book, Author } from '../cpanelAuth/cpanelclass';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CpanelService {

  constructor(private globalsService: GlobalService, private httpClinet: HttpClient) { }


  addBook(book: any) {
    return this.httpClinet.post(this.globalsService.apiUrl + 'books/create', book);
  }

  getBooks(): Observable<{ books: Book[] }> {
    return this.httpClinet.get<{ books: Book[] }>(this.globalsService.apiUrl + 'books');
  }
  getBooksbycategory(id): Observable<{ books: Book[] }> {
    return this.httpClinet.get<any>(this.globalsService.apiUrl + 'books/?category=' + id );
  }
  

  addAuthor(author: Author) {
    return this.httpClinet.post(this.globalsService.apiUrl + 'authors/create', author);
  }

  getAuthors(): Observable<{ authors: Author[] }> {
    return this.httpClinet.get<{ authors: Author[] }>(this.globalsService.apiUrl + 'authors');
  }

  getBook(id): Observable<{ book: Book }> {
    return this.httpClinet.get<{ book: Book }>(this.globalsService.apiUrl + 'books/' + id);
  }

  getorder(){
    return this.httpClinet.get(`${this.globalsService.apiUrl}users/orders` )

} 
 

getusers(id){
  return this.httpClinet.get(this.globalsService.apiUrl + 'users/' + id );

}
 

  addPoints(userPoints){
    return this.httpClinet.post(this.globalsService.apiUrl + 'users/addpoints/' ,userPoints);

  }

  delbook(bookId){
    return this.httpClinet.delete(this.globalsService.apiUrl + 'books/'+ bookId + '/');

  }
}

