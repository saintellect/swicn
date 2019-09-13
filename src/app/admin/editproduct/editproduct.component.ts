import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  ProductService
} from 'src/app/services/product.service';
import {
  CategoryService
} from 'src/app/services/category.service';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['../styles.css']
})
export class EditproductComponent implements OnInit {
  public Isfeatured: boolean | any;
  public buttonName: any;
  payload: any = [];
  prohold: any;
  images: any;
  className: string = 'btn btn-md btn-success';
  smallText: string = 'Your Product is not featured.';
  productTitle: string;
  productCat: string;
  productSize: string;
  productColors: string;
  selectedFile: any = [];
  productContents: string = '';
  cats: any;
  prodvideo: string;
  prodShort: string;
  flag: boolean = false;
  buyamazon: string;
  buyalibaba: string;
  buyaliexpress: string;
  urls = new Array < string > ();
  id: any;
  imagepath: any;
  public api: string = 'http://localhost:3000/products/';
  constructor(private route: Router, private http: HttpClient,
    private category: CategoryService, private actroute: ActivatedRoute, private service: ProductService) {}

  ngOnInit() {
    this.category.getCategoriesLength().subscribe((res) => {
      this.cats = res;
    })

    this.id = this.actroute.snapshot.paramMap.get('id');
    this.service.getProductDetails(this.id).subscribe((res) => {
      this.prohold = res;
      this.productTitle = this.prohold.productname;
      this.productCat = this.prohold.category;
      this.productSize = this.prohold.size;
      this.productColors = this.prohold.colors;
      this.prodShort = this.prohold.shortdescription;
      this.urls = this.prohold.imagePath;
      this.prodvideo = this.prohold.videopath;
      this.buyamazon = this.prohold.amazonLink;
      this.buyalibaba = this.prohold.alibabaLink;
      this.buyaliexpress = this.prohold.aliexpressLink;
      this.Isfeatured = this.prohold.Isfeatured;
      if (this.Isfeatured) {
        this.buttonName = 'No';
        this.smallText = 'Your Product is featured.'
        this.className = 'btn btn-md btn-danger'
      } else {
        this.buttonName = "Yes"
        this.smallText = 'Your Product is not featured.'
        this.className = 'btn btn-md btn-success'
      }
      this.productContents = this.prohold.productdetails;

    })

  }
  toogle() {
    this.Isfeatured = !this.Isfeatured
    if (this.Isfeatured) {
      this.buttonName = 'No';
      this.smallText = 'Your Product is featured.'
      this.className = 'btn btn-md btn-danger'
    } else {
      this.buttonName = "Yes"
      this.smallText = 'Your Product is not featured.'
      this.className = 'btn btn-md btn-success'
    }
  }
  selectImage(event) {
    this.urls = [];
    this.flag = false
    let files: any = event.target.files;

    for (var i = 0; i < event.target.files.length; i++) {
      this.selectedFile.push(event.target.files[i]);
      this.flag = true;

    }

    if (files && files.length > 3) {
      alert('Maximum 3 images are allowed....');
      return ;
    } else {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
     
    }
  }
  editProduct() {
    console.log(this.urls);

    const data1 = new FormData();
    data1.append('id', this.id);
    data1.append('productname', this.productTitle);
    data1.append('category', this.productCat);
    data1.append('size', this.productSize || null);
    data1.append('colors', this.productColors || null);
    data1.append('shortdescription', this.prodShort);
    data1.append('amazonLink', this.buyamazon || null);
    data1.append('alibabaLink', this.buyalibaba || null);
    data1.append('aliexpressLink', this.buyaliexpress || null);
    if (!this.flag) {
      for (var i = 0; i < this.urls.length; i++) {
        data1.append("imagePath", this.urls[i]);

      }
    
    }
    if (this.flag) {
      for (var i = 0; i < this.selectedFile.length; i++) {
        data1.append("image", this.selectedFile[i]);

      }
    }
    data1.append('videopath', this.prodvideo || null);
    data1.append('productdetails', this.productContents);
    data1.append('Isfeatured', this.Isfeatured);

    this.http.put(this.api + this.id, data1).subscribe((res) => {
      console.log(res);
      this.route.navigate(['/admin/view-products']);
    })
  }
}
