import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DashboardModule { }
