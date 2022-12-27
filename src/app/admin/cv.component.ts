import { Component } from '@angular/core';
import { FilterCv } from '../Models/cv.VM';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
tests:FilterCv|undefined
hello:string|undefined
// test(){
 
//   this.hello = "hhhhhh"
// }
add(event:FilterCv){
  this.tests =  new FilterCv()
  this.tests.Email=event.Email
  console.log(event.Email)
  //this.tests.Email = event
}
}
