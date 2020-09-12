import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private baseUrl="http://localhost:9090/EmployeeService/login/";
 private empBaseUrl="http://localhost:9090/EmployeeService/employee/";
  constructor(private http:HttpClient) {

   }

   loginUser(loginDetail:any):Observable<any>
   {
     let data:FormData=new FormData();
     data.append("username",loginDetail.username);
     data.append("password",loginDetail.password);
     return this.http.post(this.baseUrl+"loginUser",data);
   }

   getEmployeeList():Observable<any>
   {
     return this.http.get(this.empBaseUrl+"emplpoyeeList");
   }

}
