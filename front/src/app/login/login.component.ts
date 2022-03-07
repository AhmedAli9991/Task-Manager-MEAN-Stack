import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public Email:string=''
  public Password:string=''
  
  constructor(private cookieService : CookieService ,private user:UsersService,private router:Router) { }

  ngOnInit(): void {
  }
  OnSubmit():void{
    if(this.Email==''||this.Password==''){
      alert("Missing Fields")
    }
    
    else{
      this.user.Login(this.Email,this.Password).subscribe(
        data=>{
          if(data=="Logged in") {
            this.cookieService.set('logged','true')
            this.router.navigate(['User/Add'])
          }
          else alert("Invalid credentials")
        },
        error=>console.error(error)
      )

    }
  }
}
