import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-appliedcandidates',
  templateUrl: './appliedcandidates.component.html',
  styleUrls: ['../styles.css']
})
export class AppliedcandidatesComponent implements OnInit {
  candidates:any;
  pageOptions = [5,10,15,20];
  totalCandidates : any;
  prodcutPerPage = 5;
  currentpage = 1;
  holder ;
  constructor(private candidateservice : CandidateService) { }

  ngOnInit() {
    this.candidateservice.getCandidates(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.candidates = res;
  
    },
    (err)=>{
      console.log(err);
    })

    this.candidateservice.getcandidatelength().subscribe((res)=>{
      this.holder = res;
      this.totalCandidates = this.holder.length;
    })
  }
  refresh(){
    return    this.candidateservice.getCandidates(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
     this.candidates = res;
 
   },
     (err)=>{
       console.log(err);
     })
   }
   delete(id){
    const cnf = confirm("Are you sure to delete this candidate?");
    if(cnf){
      this.candidateservice.delete(id).subscribe((res)=>{
        this.ngOnInit();
      })
    }
    }
    changePage(event :PageEvent){
      this.prodcutPerPage = event.pageSize
      this.currentpage = event.pageIndex + 1
      this.candidateservice.getCandidates(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
        this.candidates = res;
    
      })
    }
}
