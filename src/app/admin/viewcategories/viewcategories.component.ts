import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-viewcategories',
  templateUrl: './viewcategories.component.html',
  styleUrls: ['../styles.css']
})
export class ViewcategoriesComponent implements OnInit {
cats :any;
pageOptions = [5,10,15,20];
totalProduct : any;
prodcutPerPage = 5;
currentpage = 1;
holder ;
  constructor(private service: CategoryService) { }

  ngOnInit() {
 this.service.getCategories(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
    this.cats = res;

  })

  this.service.getCategoriesLength().subscribe((res)=>{
    this.holder = res;
    this.totalProduct = this.holder.length;
  })
  }
refresh(){
 return   this.service.getCategories(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
  this.cats = res;

})
}
delete(id){
  const cnf = confirm("Are you sure to delete this category?");
  if(cnf){
    this.service.deleteCategories(id).subscribe((res)=>{
      this.service.getCategoriesLength().subscribe((res)=>{
        this.ngOnInit();
      })
     
    })
  }
  else{
    return ;
  }

}
changePage(event :PageEvent){
  this.prodcutPerPage = event.pageSize
  this.currentpage = event.pageIndex + 1
  this.service.getCategories(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
    this.cats = res;

  })
}
}
