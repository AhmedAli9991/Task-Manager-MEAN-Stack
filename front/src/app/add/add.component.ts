import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service'; 
import { Tasks } from '../models/Tasks.Interface';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public Title:string=''
  public Desc:string=''
  constructor(private tasks:TasksService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.tasks.Add({Title:this.Title,Desc:this.Desc}).subscribe(
      data=>{this.Title='';this.Desc=''},
      error=>console.error(error)
    )
  }
}
