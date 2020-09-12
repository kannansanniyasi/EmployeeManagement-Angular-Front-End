import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  home:String="";
  employee:any;
  loginForm:FormGroup;
  message:any;
  constructor(private formBuilder:FormBuilder,private loginSerice:LoginService,private router:Router) { }

  ngOnInit(): void {
    
    this.loadData();
  }
  loadData()
  {
    this.message="";
    this.loginForm=this.formBuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required],
      }
    );

  }

  onSubmit(loginValue)
  {
    console.log("Login Values"+loginValue.username);
   this.loginSerice.loginUser(loginValue).subscribe(
     (data:any)=>
     {
      console.log("flg"+data.flg);
       if(data.flg)
       {
        console.log("meaage"+data.message);
        this.router.navigate(['employee']);
        window.localStorage.setItem("username",loginValue.username);
       }else
       {
        this.message=data.message;
       }
     },
     error=>
     {
       this.message=error;
     }
   );
  }

}
