import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../styles.css']
})
export class SignupComponent implements OnInit {
  uemail : string;
  upass : string;
  ucpass : string;
  constructor(private service : SignupService) { }

  ngOnInit() {
    this.uemail ='';
    this.upass = '';
    this.ucpass = '';
  }
signup(){
  const data = {
    email : this.uemail,
    password : this.upass
  }
  
  this.service.signup(data);
  this.uemail = '';
  this.upass = '';
  this.ucpass = '';
   
}
}
