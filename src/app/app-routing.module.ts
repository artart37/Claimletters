import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errorpages/page-not-found/page-not-found.component';
import { CustomPreloadingService } from './services/preloading/custom-preloading.service';

const appRoutes: Routes =[
  {
    path:"signin",
    data:{preload:true},
    loadChildren:() => import("./signinsignup/signin/modules/signin.module").then(mod=>mod.SigninModule)
  },
  {
    path:"signup",
    data:{preload:true},
    loadChildren:() => import ("./signinsignup/signup/modules/signup.module").then(mod=>mod.SignupModule)
  },
  {
    path:"forgotpassword",
    loadChildren:() =>import("./signinsignup/forgot-password/modules/forgot-password.module").then(mod=>mod.ForgotPasswordModule)
  },
  {
    path:"404",
    component:PageNotFoundComponent,
  },
  {
    path:"**",
    component:PageNotFoundComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy:CustomPreloadingService,
    })
 ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

//Defining the eagerly loaded routing components, which we currently don't have.
export const routingComponents = [
  PageNotFoundComponent
]