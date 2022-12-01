import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-select-produit',
  templateUrl: './select-produit.component.html',
  styleUrls: ['./select-produit.component.css']
})
export class SelectProduitComponent implements OnInit {
  Hproduits:Produit;
  Fproduits:Produit;
  idp:number;
  constructor(private activatedRoute:ActivatedRoute,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.idp=this.activatedRoute.snapshot.params['id'];
   
   this.produitService.getproduitsById(this.idp).subscribe(data =>this.Hproduits=data)
  

  }
}
