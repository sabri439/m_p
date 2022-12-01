import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';

import { ProduitsComponent } from './Components/produits/produits.component';
import { SelectProduitComponent } from './Components/select-produit/select-produit.component';

const routes: Routes = [
  {path:'acceuil',title:'acceuil', component:AcceuilComponent},
  {path:'produits',title:'Produits', component:ProduitsComponent},
  {path:'produits/:id', title:'Produit choisi', component:SelectProduitComponent},
  
  {path:'', redirectTo:'acceuil', pathMatch:'full'},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
