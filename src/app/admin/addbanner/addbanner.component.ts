import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['../styles.css']
})
export class AddbannerComponent implements OnInit {
  title : string ='';
  cta : string ='';
  bannerImage: any;
  selectedFile: File = null;
  constructor(private router: Router, private service : BannerService) { }

  ngOnInit() {
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
  addbanner(){
  this.service.postBanner(this.title , this.cta, this.selectedFile).subscribe((res)=>{
    console.log(res);
    this.router.navigate(['/admin/view-banners']);
  })
  }
}
