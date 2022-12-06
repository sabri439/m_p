import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected = false;
  constructor(private http:HttpClient) { }  

  login(login:string, pwd:string):Observable<User[]>{
    return this.http.get<User[]>(URL+"?username="+login+"&pwd="+pwd);
  }
}
