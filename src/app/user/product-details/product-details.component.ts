import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
declare var jQuery : any;
export interface jQuery {

}
import * as $ from 'jquery';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['../style.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  name : string;
  category : string;
  sizes: string;
  colors : string;
  shortdesc : string;
  details: any;
  images: any;
  video: string;
  amazon : string;
 aliexress : string;
 alibaba: string;
 repoUrl:string;
  holder : any;
  selectedIndex :any = 0;
  constructor(private actroute : ActivatedRoute , private productService : ProductService) { }

  ngOnInit() {
  
      this.actroute.paramMap.subscribe((params : ParamMap)=>{
        this.id = params.get('id');
        this.repoUrl="http://localhost:4200/product-details/" + this.id;
        this.productService.getProductDetails(this.id).subscribe((res)=>{
          this.holder = res;
          this.name = this.holder.productname;
          this.category = this.holder.category;
          this.sizes = this.holder.size;
          this.colors = this.holder.colors;
          this.shortdesc = this.holder.shortdescription;
          this.video = this.holder.videopath;
          this.images = this.holder.imagePath;
          this.details = this.holder.productdetails;
          this.aliexress = this.holder.aliexpressLink;
          this.alibaba = this.holder.alibabaLink;
          this.amazon = this.holder.amazonLink;

        })
      }) 
    }
    getId(id){
    this.selectedIndex = id
    }
}
