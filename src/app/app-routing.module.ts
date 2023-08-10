import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path: 'products', component: ProductsComponent },
  {path:'order-list',component:OrderListComponent},
  {path:'place-order',component:PlaceOrderComponent},
  {path:'view-order',component:ViewOrderComponent},
  {path:'product/:id',component:ProductViewComponent},
  {path: 'view-cart', component: CartViewComponent },
  {path: 'about-us', component:AboutUsComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'signup', component: SignupComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }