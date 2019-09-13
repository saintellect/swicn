import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['../style.css']
})
export class BlogdetailsComponent implements OnInit {
 id: any;
 statusload : boolean = false;
 detailHolder : any;
 image:string;
 details;string;
 name:string;
 postedby: string;
 date:string;
 umsg:string;
 uname:string;
 uemail:string;
 ucontact:string;
 postdate = new Date();
 status : boolean = false;
 comments : any;
 public repoUrl:string;
 
  constructor(private actRoute : ActivatedRoute ,
    private blogService: BlogService, private router : Router , 
    private commentservice: CommentsService) { }
getComments(){
  
}
  ngOnInit() {

    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.repoUrl="http://localhost:4200/blogdetails/" + this.id;
    console.log(this.repoUrl);
    this.blogService.getBlogDetails(this.id).subscribe((res)=>{
      this.detailHolder = res;
     this.image = this.detailHolder.imagePath;
     this.name = this.detailHolder.blogname;
     this.details = this.detailHolder.blogdetails;
     this.postedby = this.detailHolder.postedby;
     this.date = this.detailHolder.postingdate;
    })
  this.commentservice.getComment().subscribe((res)=>{
  this.comments = res;
  })
  }
  addcomment(){
    const data = {
      blogid: this.id,
      name: this.uname,
      email : this.uemail,
      contactno:this.ucontact,
      message:this.umsg,
      date: this.postdate,
      status: this.status
    };
    console.log(data);
    this.commentservice.addcomment(data).subscribe((res)=>{
      console.log(res);
      this.statusload = true;
      
    })
  }

}
