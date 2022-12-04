import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Commentaire } from 'src/app/Model/commentaire';
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
  com:boolean=false;
  commForm:FormGroup;
lescommentaire:Commentaire;
  constructor(private activatedRoute:ActivatedRoute,private produitService:ProduitService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.commForm = this.fb.nonNullable.group({
      id:[0, Validators.required],
      nom:['', Validators.required],
      message:['',Validators.required],
      date:[''],
      
      })
    this.idph=this.activatedRoute.snapshot.params['idh'];

    this.produitService.getproduitsByIdH(this.idph).subscribe(data =>this.Hproduits=data)

  }
  ajouterComm(){
    this.produitService.addCommentaire(this.commForm.value)
    .subscribe(data => console.log(data));
    }

  ajouteraupanier(id:number){
    this.produitService.deleteProduit(this.idph).subscribe();
    }
    ajoutercom(){
      this.com=true;
    }
   
    

}
