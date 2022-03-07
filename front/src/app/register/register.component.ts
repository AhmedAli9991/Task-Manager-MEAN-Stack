import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public Email:string=''
  public Password:string=''
  public Confirm:string=''
  constructor(private user:UsersService,private router:Router) { }
  
  ngOnInit(): void {
  }
  handleSubmit():void{
    if(this.Email==''||this.Password==''||this.Confirm==''){
      console.log(this.Email)
   
      alert("Missing Fields")
    }
    else if(this.Password!=this.Confirm){
      alert("Passwords do not Match")  
    }
    else{
      this.user.Register(this.Email,this.Password).subscribe(
        data=>{
          console.log(JSON.stringify(data))
          if(data=="already exists") {
            alert("Email already exists")
            this.Email=""
            this.Password=""
            this.Confirm=""
            }
          else{
            this.router.navigate([''])
          }
        },
        error=>console.error(error)
      )
      
    }
  }
}
