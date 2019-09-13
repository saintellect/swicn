import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
private url : string = "http://localhost:3000/candidates"
  constructor(private http : HttpClient) { }
pushCandidate(name: string, email:string, phoneno:string, intrest:string, resume:File , date:any){
let data =  new FormData();
data.append("name", name);
data.append("email", email);
data.append("phoneno", phoneno);
data.append("intrest", intrest);
data.append("resume", resume, name);
data.append("date", date);
return this.http.post(this.url , data);
}
delete(id){
return this.http.delete(this.url+'/'+id);
}
getCandidates(pageSize:number , currentPage:number){
  const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
  return this.http.get(this.url+'/'+queryParams);
}
getcandidatelength(){
return this.http.get(this.url);
}
}
