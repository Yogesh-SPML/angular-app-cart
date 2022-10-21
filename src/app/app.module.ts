import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { StartupComponent } from './component/startup/startup.component';
import { Componentcomponent } from './component/component.component';
import { UserprofComponent } from './component/userprof/userprof.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    StartupComponent,
    Componentcomponent,
    UserprofComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
   

    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
