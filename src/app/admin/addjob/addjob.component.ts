import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['../styles.css']
})
export class AddjobComponent implements OnInit {
  jobtitle:string='';
  jobPostingdate:string='';
  exprnc:string='';
  jobDetails:string='';
  constructor(private service: JobsService, private router: Router) { }

  ngOnInit() {

  }
addJob(){
  const data ={
    title: this.jobtitle,
    posting_date : this.jobPostingdate,
    experience : this.exprnc,
    job_details : this.jobDetails
  }
  this.service.postJob(data).subscribe((res)=>{
    console.log(res);
    this.jobtitle='',
    this.jobPostingdate='';
    this.exprnc='';
    this.jobDetails ='';
    this.router.navigate(['/admin/viewjobs']);
  },
  (err)=>{
    console.log(err);
  })
}
}
