import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['../styles.css']
})
export class AdminloginComponent implements OnInit {
upass:string;
uemail:string;
  constructor(private authser : AdminService) { }

  ngOnInit() {
  }
  login(){
    const data ={
      email : this.uemail,
      password : this.upass
    }
    this.authser.login(data);
  }
}
