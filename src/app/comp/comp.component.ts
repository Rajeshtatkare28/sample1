import { Component } from '@angular/core';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})
export class CompComponent {
MyVariable="welcome";
submit(login:any){
console.log("form submitted",login)
}
}
