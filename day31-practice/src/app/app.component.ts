import { Component } from '@angular/core';
import { PicNum } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Practice 3
  pics: PicNum[] = [
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
    { num: 8, text: "HUAT AH!" },
  ]

  // Practice 2
  num = 10;
  newValue(val: number) {
    this.num += val;
    console.info("new value: " + this.num);
  }

  // Practice 1
  title = 'Day31 Angular Practice';
  disabled = true;
  textColour = "blue";
  toggleInput() {
    console.info("button clicked")
    this.disabled = !this.disabled;
  }
}
