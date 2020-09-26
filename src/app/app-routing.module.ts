import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { GenerateDataComponent } from './generate-data/generate-data.component';

const routes: Routes = [
  {
    path: "", 
    component: LoginComponent
  },
  {
    path: 'home', 
    component: HomeComponent,
    children:[
      {
        path: '',
        component: MenuComponent
      },
      {
        path: 'generate-data',
        component: GenerateDataComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
