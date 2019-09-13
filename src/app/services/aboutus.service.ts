import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutusService {
public url : string = '/aboutus';
  constructor(private http: HttpClient) { }
getAbout(){
return this.http.get(this.url);
}
getAboutDetail(id){
  return this.http.get(this.url+'/'+id);
}
postAbout(data){
return this.http.post(this.url , data);
}
updateAbout(id, data){
return this.http.put(this.url + '/' + id, data);
}
deleteAbout(id){
  return this.http.delete(this.url+'/'+ id);
}
}
