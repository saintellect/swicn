import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
public url : string = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }
getProducts(pageSize:number , currentPage:number){
  const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
  return this.http.get(this.url + queryParams);
}
getProductsBycategory(categoryname:string){
  // const queryParams = `?categoryname=${categoryname}`;
  return this.http.get(this.url+'/category/'+ categoryname);
}
search(productname:string){
  // const queryParams = `?categoryname=${categoryname}`;
  return this.http.get(this.url+'/search/'+ productname);
}
getProductDetails(id){
  return this.http.get(this.url +'/' +id);
}
getLength(){
  return this.http.get(this.url+'/');
}
postProduct(data : FormData){

  return this.http.post(this.url +'/' , data);
}
putProduct(id , data : FormData){

  return this.http.put(this.url +'/' +id, data);
}
deleteProduct(id){
  return this.http.delete(this.url +'/' +id);
}
getFeaturedProducts(){
  return this.http.get(this.url+'/featured/lists');
}

}
