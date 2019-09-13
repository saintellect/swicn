import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['../style.css']
})
export class BlogComponent implements OnInit {
status :boolean = false;
  constructor(private _blogService: BlogService, private router: Router) { }
  holder : any;
  ngOnInit() {
this.status =  true;
    this._blogService.getBlogsLenght().subscribe((res)=>{
      this.holder = res;
      if(this.holder){
        this.status =false;
      }
      else{
        this.status = true;
      }
     
      console.log(this.holder);
    })
  }
goto(id){
this.router.navigate(['blogdetails/', id ]);
}

}
