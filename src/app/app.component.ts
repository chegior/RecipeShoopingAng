import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  selection ='Recipe'
  
  selectedLink(linkSel){
    this.selection = linkSel;
  }
}
