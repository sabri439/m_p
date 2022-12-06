import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-hommeproduits',
  templateUrl: './hommeproduits.component.html',
  styleUrls: ['./hommeproduits.component.css']
})
export class HommeproduitsComponent implements OnInit {
search:string;
  Hproduits:Produit[];
  constructor(private produitService:ProduitService,
    private fb:FormBuilder) { }
      
  ngOnInit(): void {
      this.produitService.getHomme().subscribe(
        data => this.Hproduits = data
      );
  }
  filter(){
    if(this.search==''){
      this.produitService.getFamme().subscribe((data)=>{
        this.Hproduits=data;});
      }
      else{
        this.Hproduits=this.Hproduits.filter((res)=>
        res.libelle.toLowerCase().includes(this.search.toLowerCase()));
      }
    }
}
