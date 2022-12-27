import { Component, OnInit } from '@angular/core';
import { cvVm } from 'src/app/Models/cv.VM';
import { CvServiceService } from 'src/app/Shared/Services/cv-service.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent implements OnInit {
   data :  cvVm[] = [];
  constructor(private cv:CvServiceService){

  }
  ngOnInit(): void {
    this.cv.showCv().subscribe(respone=>{
      console.log(respone.result)
      this.data =  respone.result
    })
  }
  
   displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
   dataSource = this.data
}
