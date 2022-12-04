import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-selecthommeproduits',
  templateUrl: './selecthommeproduits.component.html',
  styleUrls: ['./selecthommeproduits.component.css']
})
export class SelecthommeproduitsComponent implements OnInit {

  Hproduits:Produit;
  idph:number;
  constructor(private activatedRoute:ActivatedRoute,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.idph=this.activatedRoute.snapshot.params['idh'];

    this.produitService.getproduitsById(this.idph).subscribe(data =>this.Hproduits=data)

  }

  ajouteraupanier(id:number){
    this.produitService.deleteProduit(id)
    .subscribe();
    }
    

}
