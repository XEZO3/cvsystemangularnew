import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CvListComponent } from './cv-list/cv-list.component'
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    CvListComponent
  ],
  imports: [
    AdminRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AdminModule { }
