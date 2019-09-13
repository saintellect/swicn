import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['../style.css']
})
export class CareerComponent implements OnInit {
getJobs : any;
status : boolean = false;
candname:string;
candemail:string;
candphone:string;
candintrest:string;
selectedfile: any;
message: boolean = false;
date: any;
  constructor(private careerservice : JobsService , private candidateservice : CandidateService) { }

  ngOnInit() {
   this.status = true;
  this.careerservice.getJobsLength().subscribe((res)=>{
    this.getJobs = res;
    console.log(this.getJobs);
    if(this.getJobs){
      this.status = false;
    }
  
  })
  }
  uploadResume(event){
    let file =  event.target.files[0];
    this.selectedfile = file;
    console.log(this.selectedfile);
  }
  scroll(el: HTMLElement) {
    
   
    el.scrollIntoView({behavior: 'smooth'});
  }
  addCandidate(){

    this.date = Date.now();
    this.candidateservice.pushCandidate(this.candname, this.candemail, this.candphone, this.candintrest, this.selectedfile, this.date).subscribe((res)=>{
      console.log(res);
      if(res){
        this.message = true;
    
      }
    },(err)=>{
      console.log(err);
    })
  }
}
