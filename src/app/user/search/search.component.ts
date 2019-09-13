import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../style.css']
})
export class SearchComponent implements OnInit {
loading: boolean = false;
products: any;
searchQuery: string
  constructor(private service : ProductService, private actroute : ActivatedRoute , private router : Router ) { }

  ngOnInit() {

  this.actroute.paramMap.subscribe((params : ParamMap)=>{
    this.searchQuery = params.get('searchQuery');

    this.service.search(this.searchQuery).subscribe((res)=>{
      this.loading = true;
      this.products = res;
      
    if(this.products){
      this.loading = false
    }
    })
  })
  }
  gotopro(product){
    this.router.navigate(['/product-deatils/', product._id]);
  }
}
