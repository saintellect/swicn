import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-editjob',
  templateUrl: './editjob.component.html',
  styleUrls: ['../styles.css']
})
export class EditjobComponent implements OnInit {
id:any;
cont:any;
jobtitle:string='';
  jobPostingdate:string='';
  exprnc:string='';
  jobDetails:string='';
  constructor(private router: Router, private service:JobsService, private actroute: ActivatedRoute) { }

  ngOnInit() {
this.id= this.actroute.snapshot.paramMap.get('id');
this.service.getJobDetails(this.id).subscribe((res)=>{
this.cont = res;
this.jobtitle = this.cont.title;
this.jobPostingdate = this.cont.posting_date;
this.exprnc = this.cont.experience;
this.jobDetails = this.cont.job_details;
})
  }
  updateJob(){
const data={
  title: this.jobtitle,
  posting_date : this.jobPostingdate,
  experience : this.exprnc,
  job_details : this.jobDetails
}

this.service.editJob(this.id, data).subscribe((res)=>{
  this.router.navigate(['/admin/viewjobs']);
})
  }
}
