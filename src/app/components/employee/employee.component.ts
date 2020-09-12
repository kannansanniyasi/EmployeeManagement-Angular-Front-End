import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {


  employeeList:any;
  tableFlg:any;
  constructor(private loginSerice:LoginService) { }

  ngOnInit(): void {
    this.getEmployeeList();
    this.tableFlg=true;
  }
  getEmployeeList()
  {
    this.loginSerice.getEmployeeList().subscribe(
      (data:any)=>
      {
       this.employeeList=data;
      },
      error=>
      {
        
      }
    );
  }

  editEmp(employee)
  {
    console.log("Employee"+employee.empId);
    this.tableFlg=false;
  }

}
