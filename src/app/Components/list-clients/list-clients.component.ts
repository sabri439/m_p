import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clientForm :FormGroup;
  lesClients:Client[];
  constructor(private fb:FormBuilder,
    private clientService:ClientService,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.CreateClientForm();
  }

  CreateClientForm(){
    this.clientForm = this.fb.nonNullable.group({
      nom:['BenFoulen',[Validators.required,Validators.pattern('^[A-Z]')]],
      prenom:['Foulen',[Validators.required,Validators.pattern('^[A-Z]')]],
      adresse:[''],
      email:['foulenbenfoulen@gmail.com',Validators.required],
      tel:0
    })
  }

  ajouterClient(){
    this.clientService.addClient(this.clientForm.value)
    .subscribe(data => console.log(data));
    }

    afficherClients(){
      this.clientService.getClients()
      .subscribe( data => this.lesClients = data)
      }
        
    
}
