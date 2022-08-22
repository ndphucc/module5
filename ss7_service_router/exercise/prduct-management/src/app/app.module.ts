import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EditComponent} from './product/edit/edit.component';
import {ListComponent} from './product/list/list.component';
import {CreateComponent} from './product/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
