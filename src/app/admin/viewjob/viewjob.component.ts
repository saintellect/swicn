import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/services/jobs.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['../styles.css']
})
export class ViewjobComponent implements OnInit {
jobs:any;
pageOptions = [5,10,15,20];
totalProduct : any;
prodcutPerPage = 5;
currentpage = 1;
holder ;

  constructor(private service: JobsService , private router: Router) { }
  
  ngOnInit() {
    this.service.getJobs(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.jobs = res;
  
    },
    (err)=>{
      console.log(err);
    })

    this.service.getJobsLength().subscribe((res)=>{
      this.holder = res;
      this.totalProduct = this.holder.length;
    })
  }
  refresh(){
   return    this.service.getJobs(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
    this.jobs = res;

  },
    (err)=>{
      console.log(err);
    })
  }
  delete(id){
  const cnf = confirm("Are you sure to delete this job?");
  if(cnf){
    this.service.delteJob(id).subscribe((res)=>{
      this.ngOnInit();
    })
  }
  }
  edit(id){
    this.router.navigate(['/admin/edit-job/', id]);
  }
  changePage(event :PageEvent){
    this.prodcutPerPage = event.pageSize
    this.currentpage = event.pageIndex + 1
    this.service.getJobs(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.jobs = res;
  
    })
  }
}
