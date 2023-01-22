import { Component } from '@angular/core';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  isOpen = true;
  toggle(){
    this.isOpen = !this.isOpen;
  }
}

