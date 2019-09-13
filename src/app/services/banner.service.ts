import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
public url : string = 'http://localhost:3000/banner/'
  constructor(private http: HttpClient) { }
  getBanner(){
    return this.http.get(this.url);
  }
  getBannerDetails(id){
    return this.http.get(this.url+id);
  }
  postBanner(bannertext : string, calltoaction: string,  image:File ){
    const data = new FormData();
     data.append('bannertext', bannertext);
     data.append('calltoaction', calltoaction);
     data.append('image', image);
     return this.http.post(this.url, data);
  }
editBanner(id: string, bannertext : string, calltoaction: string, image:File| string){
if(typeof image === 'object'){
  const data = new FormData();
  data.append('id', id);
  data.append('bannertext', bannertext);
  data.append('calltoaction', calltoaction);
  data.append('image', image);
  return this.http.put(this.url+id, data);
}
else{
  const data1 =  new FormData();
  data1.append('id', id);
  data1.append('bannertext', bannertext);
  data1.append('calltoaction', calltoaction);
  data1.append('imagePath', image);
  return this.http.put(this.url + id, data1);
}
}
deleteBanner(id){
return this.http.delete(this.url + id);
}
}
