import { Component, OnInit,OnChanges, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { cvVm, FilterCv } from 'src/app/Models/cv.VM';
import { CvServiceService } from 'src/app/Shared/Services/cv-service.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit,OnChanges {
  displayedColumns: string[] = ['FullName', 'City', 'companyName', 'CompanyField','Email','phoneNumber','phoneNumber2','Action'];
   //data :  cvVm[] = [];
   dataSource: MatTableDataSource<cvVm> =  new MatTableDataSource<cvVm>();
   @Input() filter: FilterCv|undefined
   //@Input() tttt: string|undefined
   formFilter: FilterCv=new FilterCv();
   @ViewChild(MatPaginator) paginator !: MatPaginator ;
   @ViewChild(MatSort) sort !: MatSort ;
  constructor(private cv:CvServiceService){
    //this.dataSource= new MatTableDataSource(this.data);
  }
  
  ngOnInit(): void {
    this.formFilter =new FilterCv()
    this.getData(this.formFilter)
  }
  ngOnChanges(){
    this.formFilter =new FilterCv()
    this.formFilter = this.filter as FilterCv

    this.getData(this.formFilter)
  }
  getData(filters:FilterCv){
    this.cv.showCv(filters).subscribe(respone=>{
      console.log(respone.result)
      //this.data =  respone.result
      this.dataSource =  new MatTableDataSource<cvVm>(respone.result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  deletecv(cv:cvVm){
    this.cv.deleteDv(cv).subscribe(respone=>{
      console.log(respone)
      this.getData(this.formFilter)
    })
  }
   
   
}
