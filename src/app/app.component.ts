import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  loadedFeature ='Recipe'
  
  onNavigate(feature){
    //get the VALUE->feature from the HEADER component to use on the HTML
    //trough Structural Directives *ngIf 
    this.loadedFeature = feature; 
  }
}
