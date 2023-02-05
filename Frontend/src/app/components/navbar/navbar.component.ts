import { Component } from '@angular/core';

@Component({
  selector: 'navbar-navigation',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isOpen = true;
  toggle(){
    this.isOpen = !this.isOpen;
  }
}

