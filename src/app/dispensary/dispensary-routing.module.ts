import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensaryListComponent } from './dispensary-list/dispensary-list.component';
import { DispensaryDetailComponent } from './dispensary-detail/dispensary-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DispensaryListComponent,
  },
  {
    path: 'dispensaries/:slug',
    component: DispensaryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispensaryRoutingModule {}
