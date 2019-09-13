import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['../style.css']
})
export class ContactusComponent implements OnInit {
  cname : string = '';
  ccontact : string = '';
  cemail : string = '';
  cmessage : string = '';
  sucess : boolean  = false;
  constructor(private service : ContactService) { }

  ngOnInit() {

  }
  addConatct(){
  const data = {
    name : this.cname,
    contactno : this.ccontact,
    email : this.cemail,
    message : this.cmessage,
    date : Date.now()
  }
  this.service.postContact(data).subscribe((res)=>{
    console.log(res);
    this.cname = '';
    this.ccontact = '';
    this.cemail = '';
    this.cmessage = '';
    this.sucess = true;
    setTimeout(() => {
      this.sucess = false
    }, 5000);
  })
  }

}
