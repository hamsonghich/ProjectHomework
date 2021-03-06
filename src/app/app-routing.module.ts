import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThungnhuaDanplaComponent} from './thungnhua-danpla/thungnhua-danpla.component';
import {LienheComponent} from './lienhe/lienhe.component';
import {GioithieuComponent} from './gioithieu/gioithieu.component';
import {ProductComponent} from './product/product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductTypeComponent} from './product-type/product-type.component';
import {VachnhuaDanplaComponent} from './vachnhua-danpla/vachnhua-danpla.component';
import {XopEvaFoamComponent} from './xop-eva-foam/xop-eva-foam.component';
import {XopbongkhiComponent} from './xopbongkhi/xopbongkhi.component';
import {TrangChuComponent} from './trang-chu/trang-chu.component';
import {TintucComponent} from './tintuc/tintuc.component';

const routes: Routes = [
  {path: 'trangchu', component: TrangChuComponent},
  {path: 'thungnhuadanpla', component: ThungnhuaDanplaComponent},
  {path: 'vachnhuadanpla', component: VachnhuaDanplaComponent},
  {path: 'xopEvaPeFoam', component: XopEvaFoamComponent},
  {path: 'xopbongkhi', component: XopbongkhiComponent},
  {path: 'tintuc', component: TintucComponent},
  {path: 'lienhe', component: LienheComponent},
  {path: 'gioithieu', component: GioithieuComponent},
  {path: 'product', component: ProductComponent},
  {path: 'productDetails/:id', component: ProductDetailsComponent,  pathMatch: 'full', },
  {path: 'productType/:id', component: ProductTypeComponent, pathMatch: 'full'},
  {path: '', redirectTo: '/trangchu', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes,  {enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top' });
