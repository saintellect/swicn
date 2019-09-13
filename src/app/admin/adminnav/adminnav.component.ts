import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['../styles.css']
})
export class AdminnavComponent implements OnInit {

  constructor( private authservice : AdminService) { }


  ngOnInit() {
    $('.treeview').on('click', function(){

      if( $(this).hasClass("is-expanded")){
        $(this).removeClass("is-expanded")
      }
      else{
        $(this).addClass("is-expanded")
      }
       
    });
  
  
    $('.app-sidebar__toggle').on('click', function(){
  
      if( $('.rtl').hasClass("sidenav-toggled")){
        $('.rtl').removeClass("sidenav-toggled")
      }
      else{
        $('.rtl').addClass("sidenav-toggled")
      }
       
    });
  }
  logout(){
let confrm = confirm("Are you sure to logout?");
if(confrm){
  this.authservice.logout();
  console.log(this.authservice.isAuth());
}
  }
}
