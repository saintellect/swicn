import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['../styles.css']
})
export class EditbannerComponent implements OnInit {
id:any;
title:string;
cta : string;
imageurl:string;
bannerDetails:any;
selectedFile:File= null;
bannerImage:any;
  constructor(private service: BannerService, private router: Router, private activatedrouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedrouter.snapshot.paramMap.get('id');
    this.service.getBannerDetails(this.id).subscribe((res)=>{
      console.log(res);
      this.bannerDetails =  res;
      this.title = this.bannerDetails.bannertext;
      this.cta =  this.bannerDetails.calltoaction;
      this.imageurl = this.bannerDetails.imagePath;
    })
  }
  selectImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.selectedFile =  (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.onload = () => {
      this.bannerImage = reader.result;
    }
    reader.readAsDataURL (file);
  }
  editbanner(){
    if(this.selectedFile !== null && this.selectedFile){
      this.service.editBanner(this.id, this.title, this.cta, this.selectedFile).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/admin/view-banners']);
      })
    }
    else{
      this.service.editBanner(this.id, this.title,this.cta, this.imageurl).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/admin/view-banners']);
      })
    }
  }
}
