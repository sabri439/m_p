import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { FammeproduitsComponent } from './fammeproduits/fammeproduits.component';
import { HommeproduitsComponent } from './hommeproduits/hommeproduits.component';
import { SelectfammeproduitsComponent } from './selectfammeproduits/selectfammeproduits.component';
import { SelecthommeproduitsComponent } from './selecthommeproduits/selecthommeproduits.component';

const routes: Routes = [
  {path:'client', component:DashboardClientComponent,
  children:[
  {path:'acceuil',title:'acceuil', component:AcceuilComponent},
  {path:'hommeproduits', title:'Homme', component:HommeproduitsComponent},
  {path:'hommeproduits/:idh', title:'Homme', component:SelecthommeproduitsComponent},
  {path:'fammeproduits', title:'Famme', component:FammeproduitsComponent},
  {path:'fammeproduits/:idf', title:'Famme', component:SelectfammeproduitsComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'}]
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
