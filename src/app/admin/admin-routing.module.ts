import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from '../erreur/erreur.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  { path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**',title:'erreur',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
