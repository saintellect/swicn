import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { CommentsService } from 'src/app/services/comments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showcomments',
  templateUrl: './showcomments.component.html',
  styleUrls: ['../styles.css']
})
export class ShowcommentsComponent implements OnInit {

smallText:string ='Comment is hidden';

blogId: any;
blogName:string;
holder:any;
comments : any;
status:boolean = false;
id : any;
  constructor(private blogService: BlogService, private commentService : CommentsService, private actRoute : ActivatedRoute) { }

  ngOnInit() {
    this.commentService.getComment().subscribe((res)=>{
      this.status =true;
      this.comments = res;
      
      if(this.comments){
        this.status = false;
      }
      console.log(this.comments);
    
    })
    this.blogId = this.actRoute.snapshot.paramMap.get('id');
    this.blogService.getBlogDetails(this.blogId).subscribe((res)=>{
      this.holder = res;
      this.blogName = this.holder.blogname;
    })
 
  }
refresh(){
  return   this.commentService.getComment().subscribe((res)=>{
    this.comments= res;
    console.log(this.comments);
  })
}


      show(cmnt){
        this.smallText = 'Comment is showing'
        const data = {
          id: cmnt._id,
          blogid: cmnt.blogid,
          name:cmnt.name,
          contactno :cmnt.contactno,
          email:cmnt.email,
          message :cmnt.message,
          date:cmnt.date,
          status : true
        } 
        this.commentService.updateCommnet(cmnt._id , data).subscribe((res)=>{
          this.refresh();
          console.log(res);
        }) 
      }

      hide(cmnt){
      
        this.smallText = 'Comment is hidden'
       
        const data1 = {
          id: cmnt._id,
          blogid: cmnt.blogid,
          name:cmnt.name,
          contactno :cmnt.contactno,
          email:cmnt.email,
          message :cmnt.message,
          date:cmnt.date,
          status : false
        } 
    
        this.commentService.updateCommnet(cmnt._id , data1).subscribe((res)=>{
          this.refresh();
          console.log(res);
        
        }) 
      }
      delete(id){
        const alert = confirm("Are you sure to delete this comment?");
        if(alert){
          this.commentService.deleteComment(id).subscribe((res)=>{
            this.refresh();
          })
        }
     else{
      return;
     }
      }
}
