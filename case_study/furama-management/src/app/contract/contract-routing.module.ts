import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContractComponent} from './contract-list/contract.component';


const routes: Routes = [
  {
    path: 'list',
    component : ContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule {
}
