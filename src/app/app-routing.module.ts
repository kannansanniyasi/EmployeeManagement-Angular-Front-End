import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { EmployeeComponent } from './components/employee/employee.component';


const routes: Routes = [
  {path:'',component:IndexComponent,pathMatch:"full"},
  {path:'employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
