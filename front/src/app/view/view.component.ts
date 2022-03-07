import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public list:any=[]
  constructor(private tasks:TasksService,private router:Router) { }
  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.tasks.ViewAll().subscribe(
      (data)=>{
        this.list=data
    },
      error=>console.error(error)
    )
  }
  delete(id:string){
    this.tasks.Delete(id).subscribe(
      data=>{this.getList()},
      error=>console.error(error)
    )
  }
  update(id:string){
    this.router.navigate([`User/${id}`])
  }
}
