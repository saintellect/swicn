import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-addtestimonial',
  templateUrl: './addtestimonial.component.html',
  styleUrls: ['../styles.css']
})
export class AddtestimonialComponent implements OnInit {
  selectedFile:File = null;
  bannerImage:any;
  memberName:string;
  memberDesignation : string;
  memberMessage: string;
  constructor(private router: Router, private service:TeamService) { }

  ngOnInit() {
  }
  selectImage(event : Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.selectedFile =  (event.target as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.onload = () => {
      this.bannerImage = reader.result;
    }
    reader.readAsDataURL (file);
  }
  addteam(){
    this.service.postTeamMember(this.memberName, this.memberDesignation, this.memberMessage, this.selectedFile).subscribe((res)=>{
      this.router.navigate(['/admin/view-members']);
      console.log(res);
        })
  }
}
