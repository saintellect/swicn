import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['../styles.css']
})
export class AddblogComponent implements OnInit {
  blogTitle: any;
  blogPostedBy : string ='';
  postingDate : string ='';
  blogImage : any;
  selectedFile: File = null; 
  blogContents: string ='';
  constructor(private blogservice : BlogService, private router : Router) { }

  ngOnInit() {
   
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
  addblog(){
    this.blogservice.postBlog(this.blogTitle ,this.blogPostedBy , this.postingDate, this.selectedFile, this.blogContents).subscribe((res)=>{
      console.log(res);
     this.router.navigate(['/admin/view-blogs']);
    },(err)=>{
      console.log(err);
    });
  }
}
