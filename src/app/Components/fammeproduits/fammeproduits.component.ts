import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-fammeproduits',
  templateUrl: './fammeproduits.component.html',
  styleUrls: ['./fammeproduits.component.css']
})
export class FammeproduitsComponent implements OnInit {

  Fproduits:Produit[];
  constructor(private produitservice:ProduitService,
    private fb:FormBuilder) { }

  ngOnInit(): void {

    this.produitservice.getFamme().subscribe(
      data => this.Fproduits = data
    )
  }

}
