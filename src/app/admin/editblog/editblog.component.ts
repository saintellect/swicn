import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['../styles.css']
})
export class EditblogComponent implements OnInit {
id:any;
blogs:any;
blogTitle: string ='';
blogPostedBy : string ='';
postingDate : string ='';
blogImage : any;
imageurl:string = '';
selectedFile:File =null; 
blogContents: string ='';
  constructor(private router : Router, private blogservice: BlogService, private activatedroute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.blogservice.getBlogDetails(this.id).subscribe((res)=>{
      this.blogs = res;
      this.blogTitle = this.blogs.blogname;
      this.blogPostedBy = this.blogs.postedby;
      this.imageurl = this.blogs.imagePath;
      console.log(this.imageurl);
      this.postingDate = this.blogs.postingdate;
      this.blogContents = this.blogs.blogdetails;
    })
  }
  selectImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.selectedFile =  (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.onload = () => {
      this.blogImage = reader.result;
    }
    reader.readAsDataURL (file);
  }
  updateblog(){
    if(this.imageurl && this.imageurl!==''){
      this.blogservice.updateBlog(this.id , this.blogTitle , this.blogPostedBy , this.postingDate, this.imageurl, this.blogContents).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/admin/view-blogs']);
      })
    }
    if(this.selectedFile && this.selectedFile !== null){
      this.blogservice.updateBlog(this.id , this.blogTitle , this.blogPostedBy , this.postingDate, this.selectedFile, this.blogContents).subscribe((res)=>{
        console.log(res);
        this.router.navigate(['/admin/view-blogs']);
      })
    }
  }
}
