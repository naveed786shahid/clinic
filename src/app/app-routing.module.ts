import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { LoginPage } from './pages/auth/login/login.page';
import { RegisterPage } from './pages/auth/register/register.page';
import { DashboardPage } from './pages/dashboard/dashboard.page';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login',component: LoginPage },
  { path: 'register',component: RegisterPage },
  { path: 'dashboard',
    component: DashboardPage,
    canActivate: [AuthGuard],
    pathMatch : 'full'
  },
  { path: 'dashboard/:id', 
  component:DashboardPage, 
  canActivate: [AuthGuard] },
  {
    path: 'email',
    loadChildren: () => import('./pages/email/email.module').then( m => m.EmailPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'clinic-detail/:id/:date/:venue',
    loadChildren: () => import('./pages/clinic-detail/clinic-detail.module').then( m => m.ClinicDetailPageModule)
  },
  
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
