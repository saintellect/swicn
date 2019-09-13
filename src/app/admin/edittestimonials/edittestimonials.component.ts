import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edittestimonials',
  templateUrl: './edittestimonials.component.html',
  styleUrls: ['../styles.css']
})
export class EdittestimonialsComponent implements OnInit {
id:any;
teams;any;
selectedFile:File = null;
teamImage:any;
imageurl:string;
memberName:string;
memberDesignation : string;
memberMessage : string;
  constructor(private route: Router, private actroute : ActivatedRoute, private service : TeamService) { }

  ngOnInit() {
    this.id = this.actroute.snapshot.paramMap.get('id');
    this.service.getMemberdetails(this.id).subscribe((res)=>{
      this.teams = res;
      this.memberName = this.teams.name;
      this.memberDesignation = this.teams.designation;
      this.imageurl =  this.teams.imagePath
      this.memberMessage = this.teams.message;

    })
  }
  selectImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.selectedFile =  (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.onload = () => {
      this.teamImage = reader.result;
    }
    reader.readAsDataURL (file);
  }
  Updateteam(){
  if(this.selectedFile !== null && this.selectedFile ){
    this.service.putmember(this.id, this.memberName, this.memberDesignation, this.memberMessage, this.selectedFile).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/admin/view-members']);
    })
  }
  else{
    this.service.putmember(this.id, this.memberName, this.memberDesignation, this.memberMessage, this.imageurl).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/admin/view-members']);
    })
  }
  }
}
