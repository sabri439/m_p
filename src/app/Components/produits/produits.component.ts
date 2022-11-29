import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  Hproduits:Produit[];
  Fproduits:Produit[];

  constructor(private produitService:ProduitService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.produitService.getHomme().subscribe(
      data => this.Hproduits = data
      )

    this.produitService.getFamme().subscribe(
      data => this.Fproduits = data
    )  
    
   
  }
}
