import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
public url : string = "http://localhost:3000/team/";
  constructor(private http:HttpClient) { }
getTeam(){
  return this.http.get(this.url);
}
getMemberdetails(id){
return this.http.get(this.url+id);
}
postTeamMember(name: string, designation:string, message:string,  image:File){
const data = new FormData();
data.append('name', name);
data.append('designation', designation);
data.append('message', message)
data.append('image', image, name);
return this.http.post(this.url, data);
}
putmember(id:string, name: string, designation:string, message:string, image:File | string  ){
if(typeof image === 'object'){
  const data = new FormData();
  data.append('id', id);
  data.append('name', name);
  data.append('designation', designation);
  data.append('message', message)
  data.append('image',  image, name);
  return this.http.put(this.url+id, data);
}
else{
  const data1 =  new FormData();
  data1.append('id', id);
  data1.append('name', name);
  data1.append('designation', designation);
  data1.append('message', message);
  data1.append('imagePath', image);
  return this.http.put(this.url+id, data1);
}
}
removeMmeber(id){
return this.http.delete(this.url+id);
}
}

