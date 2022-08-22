import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CreateComponent, ListComponent, EditComponent],
    imports: [
        CommonModule,
        CategoryRoutingModule,
        ReactiveFormsModule
    ]
})
export class CategoryModule {
}
