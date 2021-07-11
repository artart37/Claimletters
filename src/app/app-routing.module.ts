import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
export const routingComponents = []