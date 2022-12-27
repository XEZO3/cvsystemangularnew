import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'public',loadChildren:()=>import("./public/public.module").then(x=>x.PublicModule)
  },
  {
    path:'admin',loadChildren:()=>import("./admin/admin.module").then(x=>x.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
