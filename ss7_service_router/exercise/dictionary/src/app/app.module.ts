import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';
import {DetailComponent} from './detail/detail.component';
import {Router, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

// @ts-ignore
const router: Router = [{
  path: 'home',
  component: PageComponent
},
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
