import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ScanComponent } from './scan/scan.component';

const routes: Routes = [
  {
    path: '', component: ScanComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
