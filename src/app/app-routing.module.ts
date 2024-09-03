import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ComponentComponent } from './component/component.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:"Order Now !!!",component:OrderComponent},
  {path:'**',component:ComponentComponent},
  {path:'second',component:SecondComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
