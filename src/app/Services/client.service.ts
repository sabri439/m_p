import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Model/client';

const URLC ="http://localhost:3000/Client";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http :HttpClient) { }

  addClient(c:Client):Observable<Client>{
    return this.http.post<Client>(URLC, c);
    }

  getClients():Observable<Client[]>{
      return this.http.get<Client[]>(URLC);
  }    
}
