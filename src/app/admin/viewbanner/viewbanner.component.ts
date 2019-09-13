import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewbanner',
  templateUrl: './viewbanner.component.html',
  styleUrls: ['../styles.css']
})
export class ViewbannerComponent implements OnInit {
banners:any;
  constructor(private service : BannerService, private router: Router) { }

  ngOnInit() {
    this.service.getBanner().subscribe((res)=>{
      this.banners = res;
    })
  }
  refresh(){
    return     this.service.getBanner().subscribe((res)=>{
      this.banners = res;
    })
  }
delete(id){
let confrm = confirm('Are you sure to delete this banner?');
if(confrm){
  this.service.deleteBanner(id).subscribe((res)=>{
    console.log(res);
    this.refresh();
  })
}
}
edit(id){
this.router.navigate(['/admin/edit-banner', id]);
}
}
