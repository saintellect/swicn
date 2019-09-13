import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AddbannerComponent } from './admin/addbanner/addbanner.component';
import { ViewbannerComponent } from './admin/viewbanner/viewbanner.component';
import { SubscribersComponent } from './admin/subscribers/subscribers.component';
import { ContactqueriesComponent } from './admin/contactqueries/contactqueries.component';
import { AddblogComponent } from './admin/addblog/addblog.component';
import { ViewblogsComponent } from './admin/viewblogs/viewblogs.component';
import { EditteammemberComponent } from './admin/editteammember/editteammember.component';
import { EditaboutusComponent } from './admin/editaboutus/editaboutus.component';
import { EditproductComponent } from './admin/editproduct/editproduct.component';
import { EditblogComponent } from './admin/editblog/editblog.component';
import { AddtestimonialComponent } from './admin/addtestimonial/addtestimonial.component';
import { ViewtestimonialsComponent } from './admin/viewtestimonials/viewtestimonials.component';
import { EdittestimonialsComponent } from './admin/edittestimonials/edittestimonials.component';
import { AddjobComponent } from './admin/addjob/addjob.component';
import { ViewjobComponent } from './admin/viewjob/viewjob.component';
import { AppliedcandidatesComponent } from './admin/appliedcandidates/appliedcandidates.component';
import { EditjobComponent } from './admin/editjob/editjob.component';
import { EditbannerComponent } from './admin/editbanner/editbanner.component';
import { SignupComponent } from './admin/signup/signup.component';
import { AuthGuard } from './auth.guard';
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
import { ShowcommentsComponent } from './admin/showcomments/showcomments.component';
import { AllproductsComponent } from './user/allproducts/allproducts.component';

const routes: Routes = [
  {path:'', component:NavbarComponent , children : [
    {path:'', component : HomeComponent},
    {path:'aboutus', component: AboutusComponent},
    {path:'blogs', component:BlogComponent},
    {path:'blogdetails/:id' ,component :BlogdetailsComponent},
    {path:'allproducts', component:AllproductsComponent},
    {path:'products/:categoryname', component: ProductsComponent},
    {path:'contact-us', component:ContactusComponent},
    {path:'career', component: CareerComponent},
    {path:'search-results/:searchQuery', component:SearchComponent},
    {path:'product-deatils/:id', component:ProductDetailsComponent}
  ]},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'adminRegister', component: SignupComponent},
  {path:'admin', component: AdminnavComponent, canActivateChild:[AuthGuard],  children:[
    {path:'', pathMatch:'full', redirectTo:'dashboard'},
    {path:'dashboard', component:DashboardComponent},
    {path:'add-team-member', component:AddmemberComponent},
    {path:'view-team-members', component:ViewmembersComponent},
    {path:'edit-team-member/:id', component:EditteammemberComponent},
    {path:'addjob', component:AddjobComponent},
    {path:'edit-job/:id', component:EditjobComponent},
    {path:'viewjobs',component: ViewjobComponent},
    {path:'appliedcandidates', component:AppliedcandidatesComponent},
    {path:'add-aboutus-content', component:AddaboutComponent},
    {path:'view-aboutus-contents', component:ViewaboutComponent},
    {path:'edit-about-us-contents/:id', component:EditaboutusComponent},
    {path:'add-product-category', component:AddcategoryComponent},
    {path:'view-product-categories', component:ViewcategoriesComponent},
    {path:'add-product', component:AddproductComponent},
    {path:'view-products', component:ViewproductsComponent},
    {path:'edit-product/:id', component:EditproductComponent},
    {path:'add-banner' , component:AddbannerComponent},
    {path:'view-banners', component:ViewbannerComponent},
    {path:'edit-banner/:id', component:EditbannerComponent},
    {path:'manage-subscribers', component:SubscribersComponent},
    {path:'contact-queries', component:ContactqueriesComponent},
    {path:'add-blog', component:AddblogComponent},
    {path:'view-blogs', component:ViewblogsComponent},
    {path:'edit-blog/:id', component:EditblogComponent},
    {path:'showComments/:id', component:ShowcommentsComponent},
    {path:'add-member', component:AddtestimonialComponent},
    {path:'view-members', component:ViewtestimonialsComponent},
    {path:'edit-member/:id', component:EdittestimonialsComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
