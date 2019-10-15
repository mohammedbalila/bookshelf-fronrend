import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IndexComponent } from './index/index.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { WhoComponent } from './who/who.component';
import { ContacusComponent } from './contacus/contacus.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './homeAuth/home/home.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BasketComponent } from './basket/basket.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { CheckoutpurchaseComponent } from './checkoutpurchase/checkoutpurchase.component';
import { StatusComponent } from './status/status.component';
import { ProfileComponent } from './profile/profile.component';
import { NotiComponent } from './noti/noti.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { ChildComponent } from './child/child.component';
import { GlobalService } from './app.globals';
import { AuthService } from './auth/auth.service';
import { CheckoutexchangeComponent } from './checkoutexchange/checkoutexchange.component';
import { CpanelComponent } from './cpanelAuth/cpanel/cpanel.component';
import { MatchValueDirective } from './directives/match-value.directive';
import { SendrequestService } from './homeAuth/sendrequest.service';
import { TokenInterceptor } from './token-interceptor';
import { WarningBoxComponent } from './messagebox/warning-box/warning-box.component';
import { ErrorBoxComponent } from './messagebox/error-box/error-box.component';
import { YesOrNoComponent } from './messagebox/yes-or-no/yes-or-no.component';
import { PleaseWaitComponent } from './shared/please-wait/please-wait.component';
import { MessageBoxService } from './messagebox/message-box.service';
import { UIService } from './shared/UI.service';
import { BasketService } from './basket/basket.service';

import { EnquiryComponent } from './cpanelAuth/enquiry/enquiry.component';
import { OrderpurshasecpanelComponent } from './cpanelAuth/orderpurshasecpanel/orderpurshasecpanel.component';
import { OrderexchangecpanelComponent } from './cpanelAuth/orderexchangecpanel/orderexchangecpanel.component';
import { RecordComponent } from './cpanelAuth/record/record.component';
import { SearchComponent } from './homeAuth/search/search.component';
import { BookbycategoryComponent } from './homeAuth/bookbycategory/bookbycategory.component';
import { NgHttpLoaderModule } from 'ng-http-loader'; // <============

@NgModule({
  declarations: [
    AppComponent,
    MatchValueDirective,
    IndexComponent,
    SigninComponent,
    SignupComponent,
    PrivacyComponent,
    TermsComponent,
    WhoComponent,
    ContacusComponent,
    FaqsComponent,
    HomeComponent,
    BookdetailComponent,
    BasketComponent,
    ExchangeComponent,
    CheckoutpurchaseComponent,
    StatusComponent,
    ProfileComponent,
    JwPaginationComponent,
    NotiComponent,
    ChildComponent,
    CheckoutexchangeComponent,
    CpanelComponent,
    WarningBoxComponent,
    ErrorBoxComponent,
    YesOrNoComponent,
    PleaseWaitComponent,

    EnquiryComponent,
    OrderpurshasecpanelComponent,
    OrderexchangecpanelComponent,
    RecordComponent,
    SearchComponent,
    BookbycategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgHttpLoaderModule.forRoot(),
    MaterialModule
  ],
  providers: [
    GlobalService,
    AuthService,
    SendrequestService,
    MessageBoxService,
    UIService,
    BasketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],

  bootstrap: [AppComponent],
  entryComponents: [
    WarningBoxComponent,
    ErrorBoxComponent,
    YesOrNoComponent,
    PleaseWaitComponent
  ]
})
export class AppModule { }
