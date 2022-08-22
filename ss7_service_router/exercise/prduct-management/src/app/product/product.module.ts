import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListComponent, CreateComponent, EditComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        ReactiveFormsModule
    ]
})
export class ProductModule { }
