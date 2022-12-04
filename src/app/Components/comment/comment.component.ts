import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Commentaire } from 'src/app/Model/commentaire';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
commForm:FormGroup;
lescommentaire:Commentaire;
  constructor( private http:HttpClient,private fb:FormBuilder,private prodcom:ProduitService) { }

  ngOnInit(): void {
    this.commForm = this.fb.nonNullable.group({
      id:[0, Validators.required],
      nom:['', Validators.required],
      message:['',Validators.required],
      date:[''],
      
      })
  }
  
  ajouterComm(){
    this.prodcom.addCommentaire(this.commForm.value)
    .subscribe(data => console.log(data));
    }

    

}
