import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component'
import {FormsModule} from '@angular/forms'
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { AuthInterCeptor } from './services/auth.interceptor';
import { SellerLoginComponent } from './pages/seller/seller-login/seller-login.component';
import { SellerRegistrationComponent } from './pages/seller/seller-registration/seller-registration.component';
import { SellerDashboardComponent } from './pages/seller/seller-dashboard/seller-dashboard.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/seller/sidebar/sidebar.component';
import { ProductComponent } from './pages/seller/product/product.component';
import { ProfileComponent } from './pages/seller/profile/profile.component';
import { EditProfileComponent } from './pages/seller/edit-profile/edit-profile.component';
import { CustomerOrdersComponent } from './pages/seller/customer-orders/customer-orders.component';
import { EditProductComponent } from './pages/seller/edit-product/edit-product.component';
import { ProductListComponent } from './pages/seller/product-list/product-list.component';
import { SellerHomeComponent } from './pages/seller/seller-home/seller-home.component';
import { CustomerHomeComponent } from './pages/customer/customer-home/customer-home.component';
import { CartComponent } from './pages/customer/cart/cart.component';
import { OrdersComponent } from './pages/customer/orders/orders.component';
import { ProductDetailsComponent } from './pages/customer/product-details/product-details.component';
import { OrderProductComponent } from './pages/customer/order-product/order-product.component';
import { CheckoutComponent } from './pages/customer/checkout/checkout.component';
import { OrderDetailsComponent } from './pages/customer/order-details/order-details.component';
import { ReceivedOrdersComponent } from './pages/seller/received-orders/received-orders.component';
import { CustomerProfileComponent } from './pages/customer/customer-profile/customer-profile.component';
import { EditProfilesComponent } from './pages/customer/edit-profiles/edit-profiles.component';
import { SearchProductComponent } from './pages/customer/search-product/search-product.component';
import { ImageComponent } from './pages/seller/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserHomeComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    SellerDashboardComponent,
    SidebarComponent,
    ProductComponent,
    ProfileComponent,
    EditProfileComponent,
    CustomerOrdersComponent,
    EditProductComponent,
    ProductListComponent,
    SellerHomeComponent,
    CustomerHomeComponent,
    CartComponent,
    OrdersComponent,
    ProductDetailsComponent,
    OrderProductComponent,
    CheckoutComponent,
    OrderDetailsComponent,
    ReceivedOrdersComponent,
    CustomerProfileComponent,
    EditProfilesComponent,
    SearchProductComponent,
    ImageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthInterCeptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
