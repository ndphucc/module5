import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {DeleteComponent} from './product/delete/delete.component';
import {CreateComponent} from './product/create/create.component';
import {EditComponent} from './product/edit/edit.component';


const routes: Routes = [{
  path: 'product/list',
  component: ProductListComponent
}, {
  path: 'product/create',
  component: CreateComponent
}, {
  path: 'product/update/:id',
  component: EditComponent
}, {
  path: 'product/delete/:id',
  component: DeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
