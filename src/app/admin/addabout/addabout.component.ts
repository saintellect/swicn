import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutusService } from 'src/app/services/aboutus.service';

@Component({
  selector: 'app-addabout',
  templateUrl: './addabout.component.html',
  styleUrls: ['../styles.css']
})
export class AddaboutComponent implements OnInit {
atitle:string ='';
acontent:string = '';
  constructor(private router: Router, private about_service: AboutusService) { }

  ngOnInit() {
  }
  addAbout(){
    const data ={
      title : this.atitle,
      content : this.acontent
    }
    this.about_service.postAbout(data).subscribe((res)=>{
      console.log(res);
      this.atitle ='';
      this.acontent ='';
   this.router.navigate(['/admin/view-aboutus-contents']);
    },
    (err)=>{
      console.log(err);
    })
  }
}
