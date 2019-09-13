import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewtestimonials',
  templateUrl: './viewtestimonials.component.html',
  styleUrls: ['../styles.css']
})
export class ViewtestimonialsComponent implements OnInit {
teams:any;
  constructor(private service: TeamService, private router: Router) { }

  ngOnInit() {
    this.service.getTeam().subscribe((res)=>{
      this.teams = res;
    })
  }
  refresh(){
    return     this.service.getTeam().subscribe((res)=>{
      this.teams = res;
    })
  }
delete(id){
  const con = confirm("Are you sure to delete this memebr?");
  if(con){
    this.service.removeMmeber(id).subscribe((res)=>{
      console.log(res);
      this.refresh();
    })
  }
}
edit(id){
  this.router.navigate(['/admin/edit-member/',id]);
}
}
