import {
  Component,
  OnInit
} from '@angular/core';
import * as jquery from 'jquery';

import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
declare var google: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../style.css']
})
export class NavbarComponent implements OnInit {
  productsearch: any;
categories: any;
  constructor(private catServices: CategoryService,  private router : Router) {}

  ngOnInit() {
    this.catServices.getCategoriesLength().subscribe((res)=>{
      this.categories = res;
    })
    jQuery(document).ready(function () {
      jQuery('.navbar-light .dmenu').hover(function () {
        jQuery(this).find('.sm-menu').first().stop(true, true).slideDown(150);
      }, function () {
        jQuery(this).find('.sm-menu').first().stop(true, true).slideUp(105)
      });
    });
    var sp = document.querySelector('.search-open');
    var searchbar = document.querySelector('.search-inline');
    var shclose = document.querySelector('.search-close');

    function changeClass() {
      searchbar.classList.add('search-visible');
    }

    function closesearch() {
      searchbar.classList.remove('search-visible');
    }
    sp.addEventListener('click', changeClass);
    shclose.addEventListener('click', closesearch);
  }
  gotoPage(category){
   this.router.navigate(['/products/', category.categoryname.split(' ').join('-').toLowerCase()]) 
  }
  goto(){

    if (this.productsearch.length > 0){
  
      this.router.navigate(['/search-results', this.productsearch.toLowerCase()])
    }
   else{
     return;
   }
  }

}
