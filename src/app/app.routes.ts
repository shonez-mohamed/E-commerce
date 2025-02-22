import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { ProductsComponent } from './features/pages/products/products.component';
import { CategoriesComponent } from './features/pages/categories/categories.component';
import { BrandsComponent } from './features/pages/brands/brands.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { NotFoundComponent } from './features/layout/not-found/not-found.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { ProductDetailsComponent } from './features/pages/product-details/product-details.component';
import { AllordersComponent } from './features/pages/allorders/allorders.component';
import { AddressComponent } from './features/pages/address/address.component';
import { WishlistComponent } from './features/pages/wishlist/wishlist/wishlist.component';
import { ForgetpasswordComponent } from './features/auth/forgetpassword/forgetpassword/forgetpassword.component';
import { VerifyCodeComponent } from './features/auth/verifycode/verify-code/verify-code.component';
import { ResetPasswordComponent } from './features/auth/resetpass/reset-password/reset-password.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home' , pathMatch:'full'},
    {path:'home' , component:HomeComponent , canActivate:[authGuard] , title:"Home"},
    {path:'cart' , component:CartComponent , canActivate:[authGuard] , title:"Card"},
    {path:'wishlist' , component:WishlistComponent, canActivate:[authGuard] , title:"Wishlist"},
    {path:'products' , component:ProductsComponent , canActivate:[authGuard], title:"Products"},
    {path:'categories' , component:CategoriesComponent , canActivate:[authGuard], title:"Categories"},
    {path:'brands' , component:BrandsComponent , canActivate:[authGuard], title:"Brands"},
    {path:'allOrders' , component:AllordersComponent , canActivate:[authGuard], title:"All Orders"},
    {path:'address/:cartID' , component:AddressComponent , canActivate:[authGuard], title:"Address"},
    {path:'productDetails/:productID' , component:ProductDetailsComponent , canActivate:[authGuard], title:"Product Details"},

    {path:'login' , component:LoginComponent , title:"Login"},
    {path:'forgetPassword' , component:ForgetpasswordComponent , title:"Forget Password"},
    {path:'verify-code' , component:VerifyCodeComponent , title:"verify-code"},
    {path:'resetpass' , component:ResetPasswordComponent , title:"reset password"},
    {path:'register' , component:RegisterComponent, title:"Register"},

    {path:'**' , component:NotFoundComponent, title:"Page Not Found"},
    
];
