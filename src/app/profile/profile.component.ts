import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service'
import { Update , Updatepass } from '../auth/auth.model';

import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  errorMSG=''
  update = new Update();
  updatepass = new Updatepass();

  b = true;
  abc = true;
  user = {} as any;
  id = localStorage.getItem('_id');

constructor(private auth : AuthService) {}
 
  displayedColumns: string[] = ['position', 'name', 'price', 'date'];
  ordersDataSource = new MatTableDataSource(ELEMENT_DATA);
  tradingsDataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, { static: true }) paginator_1: MatPaginator;
  ngOnInit() {
    this.auth.getLoggedInUser().subscribe((response: any) => {
      console.log(response)
      this.user = response.user;
    }, (err: any) => {
      console.log(err);
    });
    this.ordersDataSource.paginator = this.paginator;
    this.tradingsDataSource.paginator = this.paginator;
    
  }

  a(){
    this.b = false;
  }
  ab(){
    this.abc = false;
  }
  onSub() {
    this.auth.update(this.user._id ,this.user).subscribe((response: any) => {
      console.log(response);
    })
   
  }

  onS(id) {
   
    this.auth.updateaddress(this.user.address._id,this.user.address).subscribe((response: any) => {
      console.log(response);
      if (response.message === 'Account was Updated') {
      } else {
        this.errorMSG = response.message
      }
    }, (error) => {
      this.errorMSG = error.statusText
    });
  }
  onpass(id) { 

    this.auth.updatepass(id,this.updatepass).subscribe((response: any) => {
      if (response.message === 'Account was Updated') {
      } else {
        this.errorMSG = response.message
      }
    }, (error) => {
      this.errorMSG = error.statusText
    });
  }
} 
 
export interface PeriodicElement {
  name: string;
  position: number;
  price: string;
  date: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', price: '10xp' , date: '25/9/2018'},
  {position: 2, name: 'Helium', price: '10xp', date: '25/9/2018'},
  {position: 3, name: 'Lithium', price: '10xp', date: '25/9/2018'},
  {position: 4, name: 'Beryllium', price: '10xp', date: '25/9/2018'},
  {position: 5, name: 'Boron', price: '10xp', date: '25/9/2018'},
  {position: 6, name: 'Carbon', price: '10xp', date: '25/9/2018'},
  {position: 7, name: 'Nitrogen', price: '10xp', date: '25/9/2018'},
  {position: 8, name: 'Oxygen', price: '10xp', date: '25/9/2018'},
  {position: 9, name: 'Fluorine', price: '10xp', date: '25/9/2018'},
  {position: 10, name: 'Neon', price: '10xp', date: '25/9/2018'},
  {position: 11, name: 'Sodium', price: '10xp', date: '25/9/2018'},
  {position: 12, name: 'Magnesium', price: '10xp', date: '25/9/2018'},
  {position: 13, name: 'Aluminum', price: '10xp', date: '25/9/2018'},
  {position: 14, name: 'Silicon', price: '10xp', date: '25/9/2018'},
  {position: 15, name: 'Phosphorus', price: '10xp', date: '25/9/2018'},
  {position: 16, name: 'Sulfur', price: '10xp', date: '25/9/2018'},
  {position: 17, name: 'Chlorine', price: '10xp', date: '25/9/2018'},
  {position: 18, name: 'Argon', price: '10xp', date: '25/9/2018'},
  {position: 19, name: 'Potassium', price: '10xp', date: '25/9/2018'},
  {position: 20, name: 'Calcium', price: '10xp', date: '25/9/2018'},
];



