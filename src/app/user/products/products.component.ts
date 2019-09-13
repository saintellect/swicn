import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../style.css']
})
export class ProductsComponent implements OnInit {
catgeory:any;
products:any;
loading : boolean = false;
categoryName:string;
  constructor(private productservice : ProductService , private router: Router, private actRoute : ActivatedRoute) { }

  ngOnInit() {

  this.actRoute.paramMap.subscribe((params : ParamMap)=>{
    this.catgeory = params.get('categoryname');
    this.categoryName = this.catgeory.split('-').join(' ').toUpperCase();
    this.productservice.getProductsBycategory(this.catgeory).subscribe((res)=>{
      this.loading = true;
      this.products = res;
      console.log(this.products.length);
    if(this.products){
      this.loading = false
    }
    })
  })

  }
  gotopro(product){
    this.router.navigate(['/product-deatils/', product._id])
  }
}
