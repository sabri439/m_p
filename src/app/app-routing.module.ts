import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { FammeproduitsComponent } from './Components/fammeproduits/fammeproduits.component';
import { HommeproduitsComponent } from './Components/hommeproduits/hommeproduits.component';

import { ProduitsComponent } from './Components/produits/produits.component';
import { SelectfammeproduitsComponent } from './Components/selectfammeproduits/selectfammeproduits.component';
import { SelecthommeproduitsComponent } from './Components/selecthommeproduits/selecthommeproduits.component';

const routes: Routes = [
  {path:'acceuil',title:'acceuil', component:AcceuilComponent},
  {path:'hommeproduits', title:'Homme', component:HommeproduitsComponent},
  {path:'hommeproduits/:idh', title:'Homme', component:SelecthommeproduitsComponent},
  {path:'fammeproduits', title:'Famme', component:FammeproduitsComponent},
  {path:'fammeproduits/idf', title:'Famme', component:SelectfammeproduitsComponent},
  {path:'', redirectTo:'acceuil', pathMatch:'full'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
