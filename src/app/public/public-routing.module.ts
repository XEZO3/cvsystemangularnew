import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCvComponent } from './add-cv/add-cv.component';

const routes: Routes = [
  {
    path:'add',component:AddCvComponent,
  },
  // {
  //   path:'register',component:RegisterComponent,
  //   canActivate:[AuthenticationGuard],
  // },
 
  // {
  //   path:'all',component:GetUsersComponent,
  //   canActivate:[AuthGuardGuard],
  //   data:[{roles:['Admin','User']}]
  // },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
