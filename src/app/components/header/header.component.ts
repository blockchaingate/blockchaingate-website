import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

selectedIndex = 0;

  constructor() { 
    
  }

  ngOnInit() {
  }

  setSelected (id: number) {
    this.selectedIndex = id;
  }

}
