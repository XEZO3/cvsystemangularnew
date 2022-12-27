import { Component } from '@angular/core';
import { FilterCv } from '../Models/cv.VM';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
filter:FilterCv|undefined
filtering(event:FilterCv){
  this.filter =  new FilterCv()
  // this.filter.Name =  event.Name
  // this.filter.Email=event.Email
  // this.filter =  new FilterCv()
 
    this.filter.Name = event.Name as string
    this.filter.FullName = event.FullName as string
    this.filter.Email = event.Email as string
    this.filter.CityName = event.CityName as string
    //this.Form.PhoneNumber = this.filterForm.value.PhoneNumber as string
    this.filter.CompanyName = event.CompanyName as string
    this.filter.CompanyField = event.CompanyField as string
  //console.log(event.Email)
  //this.tests.Email = event
}
}
