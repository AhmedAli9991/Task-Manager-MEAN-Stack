import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private cookie:CookieService, private user:UsersService,private router:Router){

   }
 
  ngOnInit(): void {
  }
  logout(){
    
    this.user.Logout().subscribe(
      data=>{
        this.cookie.set("logged",'')        
        this.cookie.set("AccessTokens",'')
        this.cookie.set("RefreshTokens",'')
        console.log(data)
        
        this.router.navigate([''])},
      error=> console.log(error)
    )
  }
}
