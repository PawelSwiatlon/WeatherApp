import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMenuItem = false;
  constructor() { }

  ngOnInit(): void {
  }
  showMenuItems() {
    this.showMenuItem = !this.showMenuItem;
  }
}
