import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['../styles.css']
})
export class AddcategoryComponent implements OnInit {
  catname:string;
  constructor(private service: CategoryService, private router : Router) { }

  ngOnInit() {
  }
  addCategory(){
    const data ={
      categoryname : this.catname
    }
    this.service.postCategory(data).subscribe((res)=>{
      console.log(res);
      this.catname ='';
      this.router.navigate(['/admin/view-product-categories']);
    })
  }
}
