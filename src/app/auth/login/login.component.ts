import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userCredential:UserDetails={
    name:"",
    password:""
  };

  
  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  onSubmit(frm){

    if(frm.value.email==="test@gmail.com" && frm.value.password==="test@123"){
      this.userCredential.name=frm.value.email;
      this.userCredential.password=frm.value.password;     
     localStorage.setItem('UserDetails',JSON.stringify(this.userCredential));
     this.router.navigate(['/dashboard']);

    }else{
      alert('Credential does not match');
    }

    
  }
}

export interface UserDetails{
  name:string,
  password:string
}
