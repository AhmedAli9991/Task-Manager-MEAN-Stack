import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  Register(Email:string,Password:string){
    return this.http.post("http://localhost:4000/user/register",{Email,Password})
  }
  Login(Email:string,Password:string){
    return this.http.post("http://localhost:4000/user/login",{Email,Password},{
      withCredentials:true,
    })
  }
  Logout(){
    return this.http.post("http://localhost:4000/user/logout",{
      withCredentials:true,
    })
  }

}

