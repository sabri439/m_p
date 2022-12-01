import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Produit } from '../Model/produit';

const URLH ="http://localhost:3000/Homme";
const URLF ="http://localhost:3000/Femme";
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
  getproduitsById(id :number):Observable<Produit>{
    return this.http.get<Produit>(URLH+"/"+id);
  }
}
