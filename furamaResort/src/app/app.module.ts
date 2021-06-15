import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SideBarComponent} from './component/side-bar/side-bar.component';
import {BodyComponent} from './component/body/body.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {ListServiceComponent} from './service/list-service/list-service.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {CreateServiceComponent} from './service/create-service/create-service.component';
import {CreateEmployeeComponent} from './employee/create-employee/create-employee.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {CreateContractDetailComponent} from './contractDetail/create-contract-detail/create-contract-detail.component';
import {UsingCustomerComponent} from './customer/using-customer/using-customer.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    BodyComponent,
    ListCustomerComponent,
    ListEmployeeComponent,
    ListServiceComponent,
    CreateCustomerComponent,
    CreateServiceComponent,
    CreateEmployeeComponent,
    ListContractComponent,
    CreateContractComponent,
    CreateContractDetailComponent,
    UsingCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
