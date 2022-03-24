import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPreloadingService } from './services/preloading/custom-preloading.service';

const appRoutes: Routes = [
  {
    path: 'signin',
    data: { preload: true },
    loadChildren: () =>
      import('./signin-signup/signin/modules/signin.module').then(
        (mod) => mod.SigninModule
      ),
  },
  {
    path: 'signup',
    data: { preload: true },
    loadChildren: () =>
      import('./signin-signup/signup/modules/signup.module').then(
        (mod) => mod.SignupModule
      ),
  },
  {
    path: 'forgotpassword',
    loadChildren: () =>
      import(
        './signin-signup/forgot-password/modules/forgot-password.module'
      ).then((mod) => mod.ForgotPasswordModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./error-pages/page-not-found/modules/page-not-found.module').then(
        (mod) => mod.PageNotFoundModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./error-pages/page-not-found/modules/page-not-found.module').then(
        (mod) => mod.PageNotFoundModule
      ),
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
