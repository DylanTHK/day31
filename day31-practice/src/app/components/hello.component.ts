import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  
  // inserts the value into hello html
  @Input() 
  message = "DEFAULT message";
  

}
