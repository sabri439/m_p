import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Commentaire } from '../Model/commentaire';
import { Produit } from '../Model/produit';

const URLH ="http://localhost:3000/Homme";
const URLF ="http://localhost:3000/Femme";
const URLCom="  http://localhost:3000/Commentaire";
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
idp:number;
  constructor(private http:HttpClient) { }

  getHomme():Observable<Produit[]>
  {
    return this.http.get<Produit[]>(URLH);
  }

  getFamme():Observable<Produit[]>
  {
    return this.http.get<Produit[]>(URLF);
  }
  getproduitsByIdH(id :number):Observable<Produit>{
    return this.http.get<Produit>(URLH+"/"+id);
  }
  getproduitsByIdF(id :number):Observable<Produit>{
    return this.http.get<Produit>(URLF+"/"+id);
  }
  deleteProduit(id:number){
    return this.http.delete(URL+"/"+ id);
    }
    
  addCommentaire(c:Commentaire):Observable<Commentaire>{
    return this.http.post<Commentaire>(URLCom,c);
    }

  getCommentaires():Observable<Commentaire[]>{
      return this.http.get<Commentaire[]>(URLCom);
  } 
}
