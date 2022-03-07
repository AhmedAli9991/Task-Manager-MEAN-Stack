import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public Title:string=''
  public Desc:string=''
  public id:string=''
  constructor(private tasks:TasksService,private Actroute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    let pid = this.Actroute.snapshot.params['id']
    console.log(pid);//params can be got through snapshoot
    this.Actroute.params.subscribe(paramsId => {
      this.id = paramsId['id']//params can also be got throght subscribe meathod
      
  });
  this.getData()
  }
  getData(){
    this.tasks.ViewOne(this.id).subscribe(
      (data:any)=>{this.Title=data.Title;this.Desc=data.Desc},
      error=>console.error(error)
    )
  }
  onSubmit(){
    this.tasks.Update({Title:this.Title,Desc:this.Desc},this.id).subscribe(
    data=>{this.router.navigate(['/User/Tasks'])
    },
    error=>console.error(error)
    )
  }
}
