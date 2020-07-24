import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'admin-user-home',
    loadChildren: () => import('./admin-user-home/admin-user-home.module').then( m => m.AdminUserHomePageModule)
  },
  {
    path: 'language-popover',
    loadChildren: () => import('./pages/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },  {
    path: 'module1',
    loadChildren: () => import('./module1/module1.module').then( m => m.Module1PageModule)
  },
  {
    path: 'module2',
    loadChildren: () => import('./module2/module2.module').then( m => m.Module2PageModule)
  },
  {
    path: 'module3',
    loadChildren: () => import('./module3/module3.module').then( m => m.Module3PageModule)
  },
  {
    path: 'module4',
    loadChildren: () => import('./module4/module4.module').then( m => m.Module4PageModule)
  },
  {
    path: 'module5',
    loadChildren: () => import('./module5/module5.module').then( m => m.Module5PageModule)
  },
  {
    path: 'module6',
    loadChildren: () => import('./module6/module6.module').then( m => m.Module6PageModule)
  },
  {
    path: 'module7',
    loadChildren: () => import('./module7/module7.module').then( m => m.Module7PageModule)
  },


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
