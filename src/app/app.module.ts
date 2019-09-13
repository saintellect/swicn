import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminnavComponent } from './admin/adminnav/adminnav.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddmemberComponent } from './admin/addmember/addmember.component';
import { ViewmembersComponent } from './admin/viewmembers/viewmembers.component';
import { AddaboutComponent } from './admin/addabout/addabout.component';
import { ViewaboutComponent } from './admin/viewabout/viewabout.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ViewcategoriesComponent } from './admin/viewcategories/viewcategories.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ViewproductsComponent } from './admin/viewproducts/viewproducts.component';
import { AddblogComponent } from './admin/addblog/addblog.component';
import { ViewblogsComponent } from './admin/viewblogs/viewblogs.component';
import { ContactqueriesComponent } from './admin/contactqueries/contactqueries.component';
import { AddbannerComponent } from './admin/addbanner/addbanner.component';
import { ViewbannerComponent } from './admin/viewbanner/viewbanner.component';
import { SubscribersComponent } from './admin/subscribers/subscribers.component';
import { EditteammemberComponent } from './admin/editteammember/editteammember.component';
import { EditaboutusComponent } from './admin/editaboutus/editaboutus.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { EditbannerComponent } from './admin/editbanner/editbanner.component';
import { EditblogComponent } from './admin/editblog/editblog.component';
import { AddtestimonialComponent } from './admin/addtestimonial/addtestimonial.component';
import { ViewtestimonialsComponent } from './admin/viewtestimonials/viewtestimonials.component';
import { EdittestimonialsComponent } from './admin/edittestimonials/edittestimonials.component';
import { AddjobComponent } from './admin/addjob/addjob.component';
import { ViewjobComponent } from './admin/viewjob/viewjob.component';
import { AppliedcandidatesComponent } from './admin/appliedcandidates/appliedcandidates.component';
import { AboutusService } from './services/aboutus.service';
import { CategoryService } from './services/category.service';
import { JobsService } from './services/jobs.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { EditjobComponent } from './admin/editjob/editjob.component';
import { BlogService } from './services/blog.service';
import { ReactiveFormsModule } from "@angular/forms";
import { BannerService } from './services/banner.service';
import { TeamService } from './services/team.service';
import { ProductService } from './services/product.service';
import { SpinnerComponent } from './spinner/spinner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SignupComponent } from './admin/signup/signup.component';
import { SignupService } from './services/signup.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NavbarComponent } from './user/navbar/navbar.component';
import { HomeComponent } from './user/home/home.component';
import { AboutusComponent } from './user/aboutus/aboutus.component';
import { ProductsComponent } from './user/products/products.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { SearchComponent } from './user/search/search.component';
import { ProductDetailsComponent } from './user/product-details/product-details.component';
import { CareerComponent } from './user/career/career.component';
import { BlogComponent } from './user/blog/blog.component';
import { BlogdetailsComponent } from './user/blogdetails/blogdetails.component';
import { LoaderComponent } from './loader/loader.component';
import { ShowcommentsComponent } from './admin/showcomments/showcomments.component';
import { AllproductsComponent } from './user/allproducts/allproducts.component';
import { CeiboShare } from 'ng2-social-share';
@NgModule({
  declarations: [
    AppComponent,
    CeiboShare,
    AdminloginComponent,
    AdminnavComponent,
    DashboardComponent,
    AddmemberComponent,
    ViewmembersComponent,
    AddaboutComponent,
    ViewaboutComponent,
    AddcategoryComponent,
    ViewcategoriesComponent,
    AddproductComponent,
    ViewproductsComponent,
    AddblogComponent,
    ViewblogsComponent,
    ContactqueriesComponent,
    AddbannerComponent,
    ViewbannerComponent,
    SubscribersComponent,
    EditteammemberComponent,
    EditaboutusComponent,
    EditproductComponent,
    EditbannerComponent,
    EditblogComponent,
    AddtestimonialComponent,
    ViewtestimonialsComponent,
    EdittestimonialsComponent,
    AddjobComponent,
    ViewjobComponent,
    AppliedcandidatesComponent,
    EditjobComponent,
    SpinnerComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ProductsComponent,
    ContactusComponent,
    SearchComponent,
    ProductDetailsComponent,
    CareerComponent,
    BlogComponent,
    BlogdetailsComponent,
    LoaderComponent,
    ShowcommentsComponent,
    AllproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [AboutusService, CategoryService, JobsService, BlogService, BannerService, 
    TeamService, ProductService, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
