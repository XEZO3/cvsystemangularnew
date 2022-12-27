import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { cvVm, FilterCv } from 'src/app/Models/cv.VM';
import { CvServiceService } from 'src/app/Shared/Services/cv-service.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit,OnChanges {
   data :  cvVm[] = [];
   @Input() filter: FilterCv|undefined
   @Input() tttt: string|undefined
   formFilter: FilterCv=new FilterCv()
  constructor(private cv:CvServiceService){

  }
  ngOnInit(): void {
    this.getData(this.formFilter)
  }
  ngOnChanges(){
    this.formFilter.Email = this.filter?.Email as string
    this.getData(this.formFilter)
  }
  getData(filters:FilterCv){
    this.cv.showCv(filters).subscribe(respone=>{
      console.log(respone.result)
      this.data =  respone.result
    })
  }
   displayedColumns: string[] = ['FullName', 'City', 'companyName', 'CompanyField','Email','phoneNumber','Action'];
   dataSource = this.data
}
