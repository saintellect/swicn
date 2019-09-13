import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutusService } from 'src/app/services/aboutus.service';

@Component({
  selector: 'app-editaboutus',
  templateUrl: './editaboutus.component.html',
  styleUrls: ['../styles.css']
})
export class EditaboutusComponent implements OnInit {
actId:any;
details:any;
atitle: string;
acontent: string;
  constructor(private actroute: ActivatedRoute, private router: Router, private about: AboutusService) { }

  ngOnInit() {
    this.actId = this.actroute.snapshot.paramMap.get('id');
    this.about.getAboutDetail(this.actId).subscribe((res)=>{
      this.details = res;
      this.atitle = this.details.title;
      this.acontent =  this.details.content;
    })
  }
  UpdateAbout(){
    const data={
      title : this.atitle,
      content : this.acontent
    }
    this.about.updateAbout(this.actId, data).subscribe((res)=>{
      this.router.navigate(['/admin/view-aboutus-contents'])
    })
  }
}
