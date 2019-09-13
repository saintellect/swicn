import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['../styles.css']
})
export class AddproductComponent implements OnInit {
  public Isfeatured:boolean | any = false;
  public buttonName:any = 'Yes';
  payload :any = [];
  images : any;
  className : string = 'btn btn-md btn-success';
  smallText : string = 'Your Product is not featured.';
  productTitle: string;
  productCat:string;
  productSize:string;
  productColors: string;
  selectedFile:any = [];
  productContents:string = '';
  cats:any;
  prodvideo:string;
  prodShort : string;
  isLoading : boolean =true ;
  buyamazon:string;
  buyalibaba:string;
  buyaliexpress:string;
  productcategory:any;
  urls = new Array<string>();
  constructor(private router : Router , private category : CategoryService, private product : ProductService) { }

  ngOnInit() {
    this.category.getCategoriesLength().subscribe((res)=>{
      this.cats = res;
    })
  }
  selectImage(event ){
    this.urls = [];
    this.payload = []
    let files: any = event.target.files;
 
    for (var i = 0; i < event.target.files.length; i++) {
     this.selectedFile.push(event.target.files[i]);
  }

    if (files && files.length > 3) {
      alert('Maximu 3 images are allowed....');
      return ;
    }
    else{
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }
  toogle(){
this.Isfeatured =!this.Isfeatured
if(this.Isfeatured){
  this.buttonName = 'No';
  this.smallText = 'Your Product is featured.'
  this.className ='btn btn-md btn-danger'
}
else{
  this.buttonName = "Yes"
  this.smallText = 'Your Product is not featured.'
  this.className = 'btn btn-md btn-success'
}
  }
  addProduct(){
const data =  new FormData();
this.isLoading = true;
this.productcategory = this.productCat.split(' ').join('-').toLowerCase();
data.append('productname', this.productcategory);
data.append('category', this.productCat);
data.append('size', this.productSize || null);
data.append('colors' , this.productColors || null);
data.append('shortdescription', this.prodShort);
data.append('amazonLink', this.buyamazon || null);
data.append('alibabaLink', this.buyalibaba || null);
data.append('aliexpressLink', this.buyaliexpress || null);
for (var i = 0; i < this.selectedFile.length; i++) {  
  data.append("image", this.selectedFile[i], this.productTitle); 
 
}
data.append('videopath', this.prodvideo || null);
data.append('productdetails', this.productContents);
data.append('Isfeatured' , this.Isfeatured);
this.product.postProduct(data).subscribe((res)=>{
  console.log(res);
  if(res)
  this.isLoading = false;
  this.router.navigate(['/admin/view-products']);
})
  }
}