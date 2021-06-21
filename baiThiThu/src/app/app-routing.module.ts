import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";

import {ListBatDongSanComponent} from "./batDongsan/list-bat-dong-san/list-bat-dong-san.component";
import {CreateBatDongSanComponent} from "./batDongsan/create-bat-dong-san/create-bat-dong-san.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'list-batDongSan', component: ListBatDongSanComponent},
  {path: 'create-batDongSan', component: CreateBatDongSanComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
