import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items=["first","angularjs","angular"];
  newitem="";
  pushitem=function(){
    if(this.newitem!="")
    {
      this.items.push(this.newitem);
      this.newitem="";
    }
  }
  
  removeitem=function(ind){
    this.items.splice(ind,1);
  }
 hovermouse=function()
 {
   this.highlight('yellow');
 }
}
