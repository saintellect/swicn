import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
private url : string = 'http://localhost:3000/comments/';
  constructor(private http: HttpClient) { }
  addcomment(data){
    return this.http.post(this.url , data);
  }
  getComment(){
    return this.http.get(this.url);
  }
  deleteComment(id){
    return  this.http.delete(this.url+'/'+id)
  }
  updateCommnet(id,data){
    return this.http.put(this.url+ '/' + id , data);
  }
}
