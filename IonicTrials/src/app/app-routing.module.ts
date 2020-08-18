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
  },
  
  {
    path: 'module-page7',
    loadChildren: () => import('./modulepages/module-page7/module-page7.module').then( m => m.ModulePage7PageModule)
  },
  {
    path: 'module-page1',
    loadChildren: () => import('./modulepages/module-page1/module-page1.module').then( m => m.ModulePage1PageModule)
  },
  
  {
    path: 'module-page3',
    loadChildren: () => import('./modulepages/module-page3/module-page3.module').then( m => m.ModulePage3PageModule)
  },
  {
    path: 'module-page4',
    loadChildren: () => import('./modulepages/module-page4/module-page4.module').then( m => m.ModulePage4PageModule)
  },
  {
    path: 'module-page5',
    loadChildren: () => import('./modulepages/module-page5/module-page5.module').then( m => m.ModulePage5PageModule)
  },
  {
    path: 'module-page6',
    loadChildren: () => import('./modulepages/module-page6/module-page6.module').then( m => m.ModulePage6PageModule)
  },
  {
    path: 'module-page2',
    loadChildren: () => import('./modulepages/module-page2/module-page2.module').then( m => m.ModulePage2PageModule)
  },
  {
    path: 'modulepage8',
    loadChildren: () => import('./modulepages/modulepage8/modulepage8.module').then( m => m.Modulepage8PageModule)
  },
  


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
