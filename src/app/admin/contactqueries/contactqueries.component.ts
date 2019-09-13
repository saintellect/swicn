import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-contactqueries',
  templateUrl: './contactqueries.component.html',
  styleUrls: ['../styles.css']
})
export class ContactqueriesComponent implements OnInit {
  queries :any;
  pageOptions = [5,10,15,20];
  totalProduct : any;
  prodcutPerPage = 5;
  currentpage = 1;
  holder ;
  constructor(private service: ContactService) { }

  ngOnInit() {
    this.service.getContactQueriez(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
      this.queries = res;
  
    })
    this.service.getContactQueriezLenght().subscribe((res)=>{
      this.holder = res;
      this.totalProduct = this.holder.length;
    })
  }
  refresh(){
    return   this.service.getContactQueriez(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
     this.queries = res;
   
   })
   }
   delete(id){
     const cnf = confirm("Are you sure to delete this category?");
     if(cnf){
       this.service.delete(id).subscribe((res)=>{
         this.service.getContactQueriezLenght().subscribe((res)=>{
           this.ngOnInit();
         })
        
       })
     }
     else{
       return ;
     }
   
   }
   changePage(event :PageEvent){
     this.prodcutPerPage = event.pageSize
     this.currentpage = event.pageIndex + 1
     this.service.getContactQueriez(this.prodcutPerPage , this.currentpage).subscribe((res)=>{
       this.queries = res;
   
     })
   }
}
