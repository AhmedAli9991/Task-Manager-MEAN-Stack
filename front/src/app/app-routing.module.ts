import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DetailsComponent } from './details/details.component';
import { ProtectGuard } from './protect.guard';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'User',component:NavigationComponent,canActivateChild:[ProtectGuard],
    children:[
      {path:'Add',component:AddComponent},
      {path:'Tasks',component:ViewComponent},
      {path:':id',component:DetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
