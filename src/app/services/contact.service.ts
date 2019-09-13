import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public url : string = 'http://localhost:3000/contact';
  constructor(private http: HttpClient) {

   }
   getContactQueriez(pageSize:number , currentPage:number){
    const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
    return this.http.get(this.url+'/'+queryParams);
  }
  getContactQueriezLenght(){
    return this.http.get(this.url);
  }
   postContact(data){
     return this.http.post(this.url , data);
   }
   delete(id){
     return this.http.delete(this.url+'/'+id);
   }
}
