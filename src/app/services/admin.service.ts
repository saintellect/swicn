import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
public url : string = "http://localhost:3000/user/login"; 
private token : string;
credentials : any;
isAuthenticated : boolean =  false;

  constructor(private  http: HttpClient, private router : Router) { }
  getToken(){
    return this.token;
  }
isAuth(){
  return this.isAuthenticated;
}

login(data){
  return this.http.post (this.url, data).subscribe((res)=>{
    console.log(res);
    this.credentials = res;
    this.token = this.credentials.token;
    if(this.token){
      this.isAuthenticated = true;
      localStorage.setItem("token" , this.token);
      this.router.navigate(['/admin/']);
      
    }
    else{
      this.isAuthenticated = false;
    }
  },
  (err)=>{
    console.log(err);
  if(err.status == '401'){
    alert("Please Check Your Username and Password!");
   
    return;
  }
  else{
    alert('Unexpected Error occured');
  }
  })
}
logout(){
  this.token = null;
  this.isAuthenticated = false;
  localStorage.removeItem("token");
  this.router.navigate(['/adminlogin']);
}
}
