import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCustomerComponent} from "./customer/create-customer/create-customer.component";
import {ListCustomerComponent} from "./customer/list-customer/list-customer.component";
import {ListEmployeeComponent} from "./employee/list-employee/list-employee.component";
import {CreateEmployeeComponent} from "./employee/create-employee/create-employee.component";
import {CreateServiceComponent} from "./service/create-service/create-service.component";
import {ListServiceComponent} from "./service/list-service/list-service.component";
import {CreateContractComponent} from "./contract/create-contract/create-contract.component";
import {CreateContractDetailComponent} from "./contractDetail/create-contract-detail/create-contract-detail.component";

const routes: Routes = [
  {path: 'create-customer', component: CreateCustomerComponent},
  {path: 'list-customer', component: ListCustomerComponent},
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'create-service', component: CreateServiceComponent},
  {path: 'list-service', component: ListServiceComponent},
  {path: 'create-contract', component: CreateContractComponent},
  {path: 'create-contract-detail', component: CreateContractDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
