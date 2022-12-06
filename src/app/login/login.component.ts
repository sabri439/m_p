import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:string="";
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.nonNullable.group({
      login:['', Validators.required],
      password:['', Validators.required]
    })
  }
  onSubmit(){
    this.authService.login(this.loginForm.value['login'],this.loginForm.value['password'])
    .subscribe(
     users =>{
       if(users.length==0){
           this.message = "Echec d'authentification";
           this.loginForm.reset();
          this.authService.connected = false;
 
       }
       else{
         this.authService.connected = true;
             this.router.navigate(['/admin']);
       }
     }
    )
   } 

}
