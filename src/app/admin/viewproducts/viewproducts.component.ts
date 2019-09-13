import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['../styles.css']
})
export class ViewproductsComponent implements OnInit {
products:any;
images: Array<any> = [];
isFeatured : string = '';
pageOptions = [5,10,15,20];
totalProduct : any;
prodcutPerPage = 5;
currentpage = 1;
holder ;

  constructor(private productser : ProductService, private router : Router) { }

  ngOnInit() {
    this.refresh();
    this.productser.getProducts(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.products = res;
    })
this.productser.getLength().subscribe((res)=>{
this.holder = res;
this.totalProduct = this.holder.length;
})
  }
  refresh(){
    return  this.productser.getProducts(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.products = res;
   
      console.log(this.products);
      this.totalProduct = this.products.length;
  
      
    })
  }
delete(id){
let confrm = confirm("Are you sure to delete this product ?")
if(confrm){
  this.productser.deleteProduct(id).subscribe((res)=>{
    this.ngOnInit();
  })
}
  }
  edit(id){
    this.router.navigate(['/admin/edit-product/' , id]);
  }
  changePage(event :PageEvent){
    this.prodcutPerPage = event.pageSize
    this.currentpage = event.pageIndex + 1
    this.productser.getProducts(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.products = res;
   
      console.log(this.products);
  
    })
  }
}
