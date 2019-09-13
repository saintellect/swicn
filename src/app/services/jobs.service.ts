import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
url : string = 'http://localhost:3000/jobs';
  constructor(private http: HttpClient) { }
  getJobs(pageSize:number , currentPage:number){
    const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
    return this.http.get(this.url + queryParams) ;
  }
  getJobsLength(){
    return this.http.get(this.url) ;
  }
  postJob(data){
    return this.http.post(this.url, data);
  }
  editJob(id, data){
    return this.http.put(this.url+'/'+id, data);
  }
  getJobDetails(id){
    return this.http.get(this.url+'/'+id);
  }
  delteJob(id){
    return this.http.delete(this.url+'/'+id);
  }
}
