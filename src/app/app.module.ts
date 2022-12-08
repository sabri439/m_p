import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErreurComponent } from './erreur/erreur.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './login/login.component';
import { ClientModule } from './Components/client.module';

@NgModule({
  declarations: [
    AppComponent,
    ErreurComponent,
    LoginComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    ClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
