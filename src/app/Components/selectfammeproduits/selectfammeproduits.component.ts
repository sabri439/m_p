import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from 'src/app/Model/produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-selectfammeproduits',
  templateUrl: './selectfammeproduits.component.html',
  styleUrls: ['./selectfammeproduits.component.css']
})
export class SelectfammeproduitsComponent implements OnInit {

  Fproduits:Produit;
  idpf:number;
  constructor(private activatedRoute:ActivatedRoute,private produitService:ProduitService) { }

  ngOnInit(): void {
    this.idpf=this.activatedRoute.snapshot.params['idf'];

    this.produitService.getproduitsById(this.idpf).subscribe(data =>this.Fproduits=data)
  }

}
