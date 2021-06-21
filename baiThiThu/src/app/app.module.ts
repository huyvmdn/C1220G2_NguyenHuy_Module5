import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BodyComponent} from "./component/body/body.component";
import {FooterComponent} from "./component/footer/footer.component";
import {HeaderComponent} from "./component/header/header.component";
import {HomeComponent} from "./component/home/home.component";
import {SideBarComponent} from "./component/side-bar/side-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {NgxPaginationModule} from "ngx-pagination";

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { CreateBatDongSanComponent } from './batDongsan/create-bat-dong-san/create-bat-dong-san.component';
import { ListBatDongSanComponent } from './batDongsan/list-bat-dong-san/list-bat-dong-san.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SideBarComponent,
    CreateBatDongSanComponent,
    ListBatDongSanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
