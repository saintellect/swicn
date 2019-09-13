import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
public url : string = 'http://localhost:3000/user/signup'
  constructor(private http: HttpClient) { }

  signup(data ){
    return this.http.post(this.url, data).subscribe((res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    })
  }
}
