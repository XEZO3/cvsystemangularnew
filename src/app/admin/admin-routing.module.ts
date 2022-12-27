import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvComponent } from './cv.component';


const routes: Routes = [
  {
    path:'CV',component:CvComponent,
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
export class AdminRoutingModule { }
