import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collpase ='true';
  //Variable with OUTPUT decorator that will contain the click from the DOM
  //with event binding (click)
  @Output() onLinkChange = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  //function that will recive the value of the Event Binding
  onEventNav(val: { target: { text: any; }; }){
    //EMIT THE VAR: Send variable to be listen from outside Component
    this.onLinkChange.emit(val.target.text);
  }

}
