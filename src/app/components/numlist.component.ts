import { Component } from '@angular/core';
import { PicNum } from '../models';

@Component({
  selector: 'app-numlist',
  templateUrl: './numlist.component.html',
  styleUrls: ['./numlist.component.css']
})
export class NumlistComponent {
  
  numImages: PicNum[] =
  [
    { num: 1, text: "ONE"},
    { num: 2, text: "TWO"},
    { num: 3, text: "THREE"},
    { num: 4, text: "FOUR"},
    { num: 5, text: "FIVE"},
  ]
}