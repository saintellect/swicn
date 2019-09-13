import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-viewblogs',
  templateUrl: './viewblogs.component.html',
  styleUrls: ['../styles.css']
})
export class ViewblogsComponent implements OnInit {
blogHolder : any;
pageOptions = [5,10,15,20];
totalProduct : any;
prodcutPerPage = 5;
currentpage = 1;
holder ;

  constructor(private blogService : BlogService, private router: Router) { }

  ngOnInit() {
    this.blogService.getBlogs(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.blogHolder = res;
  
    })

    this.blogService.getBlogsLenght().subscribe((res)=>{
      this.holder = res;
      this.totalProduct = this.holder.length;
    })
  }
  refres(){
    return    this.blogService.getBlogs(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.blogHolder = res;
  
    })
  }
  delete(id){
    let cnfrm = confirm("Are you sure to delete this blog?");
    if(cnfrm){
      this.blogService.delteBlog(id).subscribe((res)=>{
        this.ngOnInit();
      })
    }
  }
  edit(id){
    this.router.navigate(['/admin/edit-blog/' , id]);
  }
  showComments(id){
    this.router.navigate(['./admin/showComments',id]);
  }
  changePage(event :PageEvent){
    this.prodcutPerPage = event.pageSize
    this.currentpage = event.pageIndex + 1
    this.blogService.getBlogs(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.blogHolder = res;
  
    })
  }
}
