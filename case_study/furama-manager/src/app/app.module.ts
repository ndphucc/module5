import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {FacilityListComponent} from './facility-list/facility-list.component';
import {FacilityCreateComponent} from './facility-create/facility-create.component';
import {FacilityEditComponent} from './facility-edit/facility-edit.component';
import {ContractComponent} from './contract/contract.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'customer', component: CustomerListComponent},
  {path: 'customerAdd', component: CustomerCreateComponent},
  {path: 'customerEdit/:id', component: CustomerEditComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'facilityAdd', component: FacilityCreateComponent},
  {path: 'facilityEdit', component: FacilityEditComponent},
  {path: 'contract', component: ContractComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    FacilityListComponent,
    FacilityCreateComponent,
    FacilityEditComponent,
    ContractComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {
}
