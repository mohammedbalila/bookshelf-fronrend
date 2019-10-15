import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { TermsComponent } from './terms/terms.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContacusComponent } from './contacus/contacus.component';
import { WhoComponent } from './who/who.component';
import { HomeComponent } from './homeAuth/home/home.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BasketComponent } from './basket/basket.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { CheckoutpurchaseComponent } from './checkoutpurchase/checkoutpurchase.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';
import { NotiComponent } from './noti/noti.component';
import { ChildComponent } from './child/child.component';
import { CheckoutexchangeComponent } from './checkoutexchange/checkoutexchange.component';
import { CpanelComponent } from './cpanelAuth/cpanel/cpanel.component';

import { EnquiryComponent } from './cpanelAuth/enquiry/enquiry.component';
import { OrderpurshasecpanelComponent } from './cpanelAuth/orderpurshasecpanel/orderpurshasecpanel.component';
import { OrderexchangecpanelComponent } from './cpanelAuth/orderexchangecpanel/orderexchangecpanel.component';
import { RecordComponent } from './cpanelAuth/record/record.component';
import { BookbycategoryComponent } from './homeAuth/bookbycategory/bookbycategory.component';
import { SearchComponent } from './homeAuth/search/search.component';

const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'Index', component: IndexComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'contacus', component: ContacusComponent },
  // عدلت who ل index component مؤقتا
  { path: 'who', component: IndexComponent },


  {
    path: 'user', component: ChildComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'search', component: SearchComponent },

        { path: 'book', component: BookbycategoryComponent },
  
      { path: 'bookdetail/:id', component: BookdetailComponent },
      { path: 'basket', component: BasketComponent },
      { path: 'exchange', component: ExchangeComponent },
      { path: 'checkoutpurchase', component: CheckoutpurchaseComponent },
      { path: 'status', component: StatusComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'noti', component: NotiComponent },
      { path: 'checkoutexchange', component: CheckoutexchangeComponent },
      { path: 'cpanel', component: CpanelComponent },
      
     { path: 'e', component: EnquiryComponent },
      { path: 'cpanelpurchase', component: OrderpurshasecpanelComponent },
      { path: 'cpanelexchange', component: OrderexchangecpanelComponent },
     { path: 'record', component: RecordComponent },


    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CpanelComponent, CheckoutexchangeComponent,
  ChildComponent, NotiComponent, ProfileComponent,
  StatusComponent, CheckoutpurchaseComponent, ExchangeComponent,
  BasketComponent, BookdetailComponent, SignupComponent, HomeComponent,
  SigninComponent, IndexComponent, TermsComponent, PrivacyComponent, FaqsComponent,
  ContacusComponent, WhoComponent , RecordComponent , OrderexchangecpanelComponent ,
  OrderpurshasecpanelComponent , EnquiryComponent ,SearchComponent
];
