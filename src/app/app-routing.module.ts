import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NogFoundComponent } from './shared/nog-found/nog-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full' },
  {
    path: 'layout',
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '404', component: NogFoundComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
