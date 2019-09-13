import { Component, OnInit } from '@angular/core';
import { AboutusService } from 'src/app/services/aboutus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewabout',
  templateUrl: './viewabout.component.html',
  styleUrls: ['../styles.css']
})
export class ViewaboutComponent implements OnInit {
aboutContentHolder : any;
  constructor(private aboutservice : AboutusService, private router : Router) { }

  ngOnInit() {
    this.aboutservice.getAbout().subscribe((res)=>{
      this.aboutContentHolder = res;
    });
  }
  refresh(){
    this.aboutservice.getAbout().subscribe((res)=>{
      this.aboutContentHolder = res;
    });
  }
  delete(id){
    console.log(id);
    const confrm = confirm("Are you sure to delete this Content?");
    if(confrm){
      this.aboutservice.deleteAbout(id).subscribe((res)=>{
       this.refresh();
        
      });
  }

  }
  edit(id){
    this.router.navigate(['/admin/edit-about-us-contents/', id]);
  }
}
