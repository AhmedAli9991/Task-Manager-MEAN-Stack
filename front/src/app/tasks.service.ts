import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Tasks } from './models/Tasks.Interface';
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private http:HttpClient) { 
   }
  Add(Task:Tasks){
    return this.http.post("http://localhost:4000/Task/add",Task,{
      withCredentials:true,
    })
  }
  ViewAll(){
    return this.http.get("http://localhost:4000/Task/view",{
      withCredentials:true,
    })
  }

  ViewOne(id:string){
    return this.http.get(`http://localhost:4000/Task/${id}`,{
      withCredentials:true,
    })
  }
  Delete(id:string){
    return this.http.delete(`http://localhost:4000/Task/${id}`,{
      withCredentials:true,
    })
  }
  Update(Task:Tasks,id:string){
    return this.http.put(`http://localhost:4000/Task/${id}`,Task,{
      withCredentials:true,
    })
  }
}
