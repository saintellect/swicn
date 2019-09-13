import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['../style.css']
})
export class AllproductsComponent implements OnInit {
products:any;
loading:any;
  constructor(private productService: ProductService , private router : Router) { }

  ngOnInit() {
    this.productService.getLength().subscribe((res)=>{
      this.products = res;
    })
  }
  gotopro(product){
    this.router.navigate(['/product-deatils/', product._id]);
  }
}
