import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
public url : string = 'http://localhost:3000/blogs';
  constructor(private http: HttpClient) { }
getBlogs(pageSize:number , currentPage:number){
  const queryParams = `?pageSize=${pageSize}&currentPage=${currentPage}`;
  return this.http.get(this.url+'/'+queryParams);
}
  getBlogsLenght(){
    return this.http.get(this.url);
  }
  homepageBlogs(){
    return this.http.get(this.url+'/'+'recent');
  }
  getBlogDetails(id){
    return this.http.get(this.url+'/'+id);
  }
  postBlog(blogname : string, postedby: string, postingdate:string, image:File | string, blogdetails:string ){
    const data = new FormData();
    data.append ("blogname" , blogname);
    data.append ("postedby", postedby);
    data.append ("postingdate", postingdate);
    data.append("image", image, blogname);
    data.append("blogdetails" , blogdetails);
    return this.http.post(this.url , data);
  }
  delteBlog(id){
   return this.http.delete(this.url+'/'+id);
  }
  updateBlog(id: string, blogname : string, postedby: string, postingdate:string, image:File | string,  blogdetails:string){
if(typeof image === 'object'){
  const data = new FormData();
  data.append ("id", id);
  data.append ("blogname" , blogname);
  data.append ("postedby", postedby);
  data.append ("postingdate", postingdate);
  data.append("image", image , blogname);
  data.append("blogdetails" , blogdetails);
  return this.http.put(this.url+'/'+ id, data);
}
else{
  const data1 = new FormData();
  data1.append ("id", id);
  data1.append ("blogname" , blogname);
  data1.append ("postedby", postedby);
  data1.append ("postingdate", postingdate);
  data1.append("imagePath", image);
  data1.append("blogdetails" , blogdetails);
  return this.http.put(this.url+'/'+ id, data1);
}

  }
  
}
   