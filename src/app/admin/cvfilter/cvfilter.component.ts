import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { cvVm, FilterCv } from 'src/app/Models/cv.VM';
import { CvServiceService } from 'src/app/Shared/Services/cv-service.service';

@Component({
  selector: 'app-cvfilter',
  templateUrl: './cvfilter.component.html',
  styleUrls: ['./cvfilter.component.css']
})
export class CvfilterComponent {
@Output() test = new EventEmitter<FilterCv>

Form: FilterCv =  new FilterCv;
  filterForm = this.fb.group({
    Name:'',
    FullName:'',
    CityName: '',
    Email:'',
    PhoneNumber:0,
    CompanyName:'',
    CompanyField:'',
  }) 
constructor(private fb:FormBuilder){}
  Filter(){
    this.Form =  new FilterCv;
    this.Form.Name = this.filterForm.value.Name as string
    this.Form.FullName = this.filterForm.value.FullName as string
    this.Form.Email = this.filterForm.value.Email as string
    this.Form.CityName = this.filterForm.value.CityName as string
    //this.Form.PhoneNumber = this.filterForm.value.PhoneNumber as string
    this.Form.CompanyName = this.filterForm.value.CompanyName as string
    this.Form.CompanyField = this.filterForm.value.CompanyField as string
    this.test.emit(this.Form)
  }
 
}
