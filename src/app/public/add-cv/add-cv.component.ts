import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { cvVm } from '../../Models/cv.VM';
import { CvServiceService } from '../../Shared/Services/cv-service.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent {
  Form: cvVm =  new cvVm;
  addForm = this.fb.group({
    CvName :'',
    CompanyName: '',
    CityName: '',
    CompanyFeild: '',
    Email: '',
    PhoneNumber: null,
  }) 
  constructor(private fb: FormBuilder,private cv:CvServiceService){}

  add(){
    this.Form =  new cvVm();
    this.Form.Name = this.addForm.value.CvName as string
    this.Form.exp.CompanyName = this.addForm.value.CompanyName as string;
    this.Form.exp.City = this.addForm.value.CityName as string
    this.Form.personal.CityName = this.addForm.value.CityName as string
    this.Form.exp.CompanyField = this.addForm.value.CompanyFeild as string
    this.Form.personal.Email = this.addForm.value.Email as string
    this.Form.personal.PhoneNumber = this.addForm.value.PhoneNumber as unknown as number
    console.log("heho");
    this.cv.addCv(this.Form).subscribe(respone=>{
      console.log(respone);
    })
  }
}
