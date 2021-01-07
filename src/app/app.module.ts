import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatFileUploadModule } from 'angular-material-fileupload';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutComponent } from './components/home/about/about.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataComponent } from './components/home/data/data.component';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ShopComponent } from './components/shop/shop.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddToCartModalComponent } from './components/shop/add-to-cart-modal/add-to-cart-modal.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { CartComponent } from './components/shop/cart/cart.component';
import { RemoveCartItemModalComponent } from './components/shop/remove-cart-item-modal/remove-cart-item-modal.component';
import { EmptyCartModalComponent } from './components/shop/empty-cart-modal/empty-cart-modal.component';
import { OrderComponent } from './components/order/order.component';
import { CartSummaryComponent } from './components/order/cart-summary/cart-summary.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { OrderConfirmationComponent } from './components/order/order-confirmation/order-confirmation.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { EditProductComponent } from './components/shop/edit-product/edit-product.component';
import { AddProductComponent } from './components/shop/add-product/add-product.component';
import { ProductComponent } from './components/shop/product/product.component';
import { HighlightPipe } from './pipes/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ToolbarComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DataComponent,
    ShopComponent,
    ContactUsComponent,
    AddToCartModalComponent,
    MyAccountComponent,
    CartComponent,
    RemoveCartItemModalComponent,
    EmptyCartModalComponent,
    OrderComponent,
    CartSummaryComponent,
    OrderConfirmationComponent,
    OrderDetailsComponent,
    EditProductComponent,
    AddProductComponent,
    ProductComponent,
    HighlightPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatInputModule,
    MatStepperModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressBarModule,
    ClipboardModule,
    CarouselModule,
    WavesModule,
    MatFileUploadModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
