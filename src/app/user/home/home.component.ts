import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/services/banner.service';
import { BlogService } from 'src/app/services/blog.service';
import { TeamService } from 'src/app/services/team.service';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../style.css']
})
export class HomeComponent implements OnInit {
banners; any;
recentBlogs: any;
ourTeams : any;
featuredProducts : any;
  constructor(private bannerServices : BannerService , private BlogsSeervice : BlogService,
    private teamService : TeamService, private productService: ProductService , private router : Router) {

  }

  ngOnInit() {
  this.productService.getFeaturedProducts().subscribe((res)=>{
    this.featuredProducts = res;
  })
this.bannerServices.getBanner().subscribe((res)=>{
  console.log(res);
  this.banners = res;
})
this.BlogsSeervice.homepageBlogs().subscribe((res)=>{
  this.recentBlogs = res;
})

this.teamService.getTeam().subscribe((res)=>{
  this.ourTeams = res;
})

  }
  gotopro(product){
    this.router.navigate(['/product-deatils/', product._id])
  }
  goto(blog){
    this.router.navigate(['/blogdetails/' , blog._id])
  }
}
