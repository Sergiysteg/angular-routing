import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

import { Hm1Component } from './pages/hw1/hm1.component';
import { Hw2Component } from './pages/hw2/hw2.component';
import { Hw3Component } from './pages/hw3/hw3.component';
import { Hw4Component } from './hw4/hw4.component';
import { HomeComponent } from './pages/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';

import { OrderModule } from 'ngx-order-pipe';
import { PhoneSearchPipe } from './hw4/phone-search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    Hm1Component,
    Hw2Component,
    Hw3Component,
    Hw4Component,
    PhoneSearchPipe,
    HomeComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    
  ],
  entryComponents: []
})
export class AppModule { }
