import { Component, OnInit } from '@angular/core';
import { AboutusService } from 'src/app/services/aboutus.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['../style.css']
})
export class AboutusComponent implements OnInit {
aboutUs : any;
  constructor(private container : AboutusService) { }

  ngOnInit() {
    this.container.getAbout().subscribe((res)=>{
      this.aboutUs = res;
    })
  }

}
