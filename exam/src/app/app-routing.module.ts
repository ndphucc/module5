import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DanhSachBenhAnComponent} from './danh-sach-benh-an/danh-sach-benh-an.component';
import {SuaBenhAnComponent} from './sua-benh-an/sua-benh-an.component';

const routes: Routes = [
  {
    path: '',
    component: DanhSachBenhAnComponent
  },
  {
    path: 'edit/:id',
    component: SuaBenhAnComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
