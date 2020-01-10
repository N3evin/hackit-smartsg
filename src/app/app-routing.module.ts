import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home/:uuid', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'shop/:uuid', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
