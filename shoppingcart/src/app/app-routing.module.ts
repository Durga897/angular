import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './pages/customer/customer-home/customer-home.component';
import { ProductDetailsComponent } from './pages/customer/product-details/product-details.component';
import { LoginComponent } from './pages/login/login.component';
import { EditProductComponent } from './pages/seller/edit-product/edit-product.component';
import { EditProfileComponent } from './pages/seller/edit-profile/edit-profile.component';
import { ProductListComponent } from './pages/seller/product-list/product-list.component';
import { ProductComponent } from './pages/seller/product/product.component';
import { ProfileComponent } from './pages/seller/profile/profile.component';
import { SellerDashboardComponent } from './pages/seller/seller-dashboard/seller-dashboard.component';
import { SellerHomeComponent } from './pages/seller/seller-home/seller-home.component';
import { SellerRegistrationComponent } from './pages/seller/seller-registration/seller-registration.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SellerGuard } from './services/seller.guard';
import { CartComponent } from './pages/customer/cart/cart.component';
import { CustomerGuard } from './services/customer.guard';
import { OrdersComponent } from './pages/customer/orders/orders.component';
import { CheckoutComponent } from './pages/customer/checkout/checkout.component';
import { OrderDetails } from './order-details';
import { OrderDetailsComponent } from './pages/customer/order-details/order-details.component';
import { CustomerOrdersComponent } from './pages/seller/customer-orders/customer-orders.component';
import { ReceivedOrdersComponent } from './pages/seller/received-orders/received-orders.component';
import { OrderProductComponent } from './pages/customer/order-product/order-product.component';
import { CustomerProfileComponent } from './pages/customer/customer-profile/customer-profile.component';
import { EditProfilesComponent } from './pages/customer/edit-profiles/edit-profiles.component';
import { SearchProductComponent } from './pages/customer/search-product/search-product.component';
import { ImageComponent } from './pages/seller/image/image.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full',
  },
{
  path:'signup',
  component:SignupComponent,
  pathMatch:'full',
},
{
  path:'customer-profile',
  component:CustomerProfileComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'edit-profiles',
  component:EditProfilesComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'orders',
  component:OrdersComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'order-details/:productId/:orderId',
  component:OrderDetailsComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'checkout',
  component:CheckoutComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'login',
  component:LoginComponent,
  pathMatch:'full',
},
{
  path:'customer-home',
  component:CustomerHomeComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'search-product/:name',
  component:SearchProductComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'cart',
  component:CartComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'images',
  component:ImageComponent,
  pathMatch:'full',
},
{
  path:'product-details/:id',
  component:ProductDetailsComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'order-product/:id',
  component:OrderProductComponent,
  pathMatch:'full',
  canActivate:[CustomerGuard]
},
{
  path:'seller',
  component:SellerDashboardComponent,
  children:[{
    path:'add-product',
    component:ProductComponent,
  },
  {
    path:'homes',
    component:SellerHomeComponent,
  },
  {
    path:'profile',
    component:ProfileComponent,
  },
  {
    path:'edit-profile',
    component:EditProfileComponent,
  },
  {
    path:'edit-product/:id',
    component:EditProductComponent,
  },
  {
    path:'product-list',
    component:ProductListComponent,
  },
  {
    path:'customer-orders',
    component:CustomerOrdersComponent,
  },
  {
    path:'received-orders',
    component:ReceivedOrdersComponent,
  },
  ],
  canActivate:[SellerGuard]
},
{
  path:'sellerSignup',
  component:SellerRegistrationComponent,
  pathMatch:'full',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
