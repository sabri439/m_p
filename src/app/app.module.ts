import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './Components/produits/produits.component';
import { ListClientsComponent } from './Components/list-clients/list-clients.component';
import { MenuComponent } from './Components/menu/menu.component';
import { AcceuilComponent } from './Components/acceuil/acceuil.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HommeproduitsComponent } from './Components/hommeproduits/hommeproduits.component';
import { FammeproduitsComponent } from './Components/fammeproduits/fammeproduits.component';
import { SelectfammeproduitsComponent } from './Components/selectfammeproduits/selectfammeproduits.component';
import { SelecthommeproduitsComponent } from './Components/selecthommeproduits/selecthommeproduits.component';
import { CommentComponent } from './Components/comment/comment.component';
import { ErreurComponent } from './erreur/erreur.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    ListClientsComponent,
    MenuComponent,
    AcceuilComponent,
    FooterComponent,
    HommeproduitsComponent,
    FammeproduitsComponent,
    SelectfammeproduitsComponent,
    SelecthommeproduitsComponent,
    CommentComponent,
    ErreurComponent,
    LoginComponent,
    DashboradComponent,
    UserComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AdminModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
