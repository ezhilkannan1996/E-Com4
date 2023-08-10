import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderListComponent } from './components/order-list/order-list.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { FormsModule } from '@angular/forms';
import { ViewOrderComponent } from './components/view-order/view-order.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { CartViewComponent } from './components/cart-view/cart-view.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductSidebarComponent } from './components/product-sidebar/product-sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SigninComponent } from './components/signin/signin.component';
import { CartAlertComponent } from './components/cart-alert/cart-alert.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent, // Corrected component name
    PlaceOrderComponent,
    ViewOrderComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    ProductViewComponent,
    CartViewComponent,
    AboutUsComponent,
    ContactComponent,
    ProductSidebarComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    SigninComponent,
    CartAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatSelectModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
