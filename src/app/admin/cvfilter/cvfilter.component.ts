import { Component, EventEmitter, Output } from '@angular/core';
import { FilterCv } from 'src/app/Models/cv.VM';

@Component({
  selector: 'app-cvfilter',
  templateUrl: './cvfilter.component.html',
  styleUrls: ['./cvfilter.component.css']
})
export class CvfilterComponent {
@Output() test = new EventEmitter<FilterCv>

  add(){
    let ttt = new FilterCv();
    ttt.Email = "zezohamed"
    this.test.emit(ttt)
  }
}
