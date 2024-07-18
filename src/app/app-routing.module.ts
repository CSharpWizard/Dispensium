import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dispensary/dispensary.module').then((m) => m.DispensaryModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
