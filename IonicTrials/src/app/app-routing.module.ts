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
    path: 'language-popover',
    loadChildren: () => import('./pages/language-popover/language-popover.module').then( m => m.LanguagePopoverPageModule)
  },
  {
    path: 'questions-answers',
    loadChildren: () => import('./questions-answers/questions-answers.module').then( m => m.QuestionsAnswersPageModule)
  },
  { 
    path: 'info', 
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
    // loadChildren: './pages/info/info.module#InfoPageModule' 
  },
  { 
    path: 'info/:id',
    loadChildren: () => import('./info-details/info-details.module').then( m => m.InfoDetailsPageModule)
    // loadChildren: './pages/info-details/info-details.module#InfoDetailsPageModule' 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
