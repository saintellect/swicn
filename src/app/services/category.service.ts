import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url :string = 'http://localhost:3000/category'
  constructor(private http: HttpClient) { }
  getCategoriesLength(){
    return this.http.get(this.url);
  }
  getCategories(pageSize:number , currentPage:number){
    const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
    return this.http.get(this.url + queryParams) ;
  }
  postCategory(data){
    return this.http.post(this.url , data)
  }
  deleteCategories(id){
    return this.http.delete(this.url+'/'+id);
  }
}
