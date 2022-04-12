import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingService } from './shared/services/preloading/custom-preloading.service';

const appRoutes: Routes = [
  {
    path: 'signin',
    data: { preload: true },
    loadChildren: () =>
      import('./pages/signin-signup/signin/modules/signin.module').then(
        (mod) => mod.SigninModule
      ),
  },
  {
    path: 'signup',
    data: { preload: true },
    loadChildren: () =>
      import('./pages/signin-signup/signup/modules/signup.module').then(
        (mod) => mod.SignupModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import(
        './pages/signin-signup/forgot-password/modules/forgot-password.module'
      ).then((mod) => mod.ForgotPasswordModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import(
        './pages/error-handling/page-not-found/modules/page-not-found.module'
      ).then((mod) => mod.PageNotFoundModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import(
        './pages/error-handling/page-not-found/modules/page-not-found.module'
      ).then((mod) => mod.PageNotFoundModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: CustomPreloadingService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
