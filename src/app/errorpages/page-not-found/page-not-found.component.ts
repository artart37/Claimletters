import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent{
  base64Pngsrc:string ="/assets/images/473X321/404.png"
  perfectcentre: boolean = true;
  backLocation(){
    try {
      this.location.back()
    } catch (error) {
      this.router.navigateByUrl("/")
    }
  }
  constructor(private location:Location, private router:Router) { }
}