import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { Componentcomponent } from './component/component.component';
import { ProductsComponent } from './component/products/products.component';
import { StartupComponent } from './component/startup/startup.component';
import { UserprofComponent } from './component/userprof/userprof.component';

const routes: Routes = [
  {path:'', redirectTo:'startup',pathMatch:'full'},
  
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'startup', component:StartupComponent},
  {path:'component',component:Componentcomponent},
  {path:'profile',component:UserprofComponent},
  {path:'*',component:StartupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
