import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractComponent} from './contract-list/contract.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ContractComponent,
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
