import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {
  
  // allows parent html to 
  @Input()
  startNum = 10;
  
  @Output()
  valueChange = new Subject<number>();

  // method to adjust startNum variable
  updatePic(inc: number) {
    // adjust value
    this.startNum += inc
    this.valueChange.next(inc)
  }

}
