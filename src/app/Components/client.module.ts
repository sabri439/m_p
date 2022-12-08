import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardClientComponent } from './dashboard-client/dashboard-client.component';
import { AppModule } from "../app.module";
import { ProduitsComponent } from './produits/produits.component';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { MenuComponent } from './menu/menu.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FooterComponent } from './footer/footer.component';
import { HommeproduitsComponent } from './hommeproduits/hommeproduits.component';
import { FammeproduitsComponent } from './fammeproduits/fammeproduits.component';
import { SelectfammeproduitsComponent } from './selectfammeproduits/selectfammeproduits.component';
import { SelecthommeproduitsComponent } from './selecthommeproduits/selecthommeproduits.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
    declarations: [
        DashboardClientComponent,
        ProduitsComponent,
        ListClientsComponent,
        MenuComponent,
        AcceuilComponent,
        FooterComponent,
        HommeproduitsComponent,
        FammeproduitsComponent,
        SelectfammeproduitsComponent,
        SelecthommeproduitsComponent,
        CommentComponent
    ],
    imports: [
        CommonModule,
        ClientRoutingModule
    ]
})
export class ClientModule { }
