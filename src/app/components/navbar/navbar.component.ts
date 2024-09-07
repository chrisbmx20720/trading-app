import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // Suscribirse a los cambios de la ruta
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
}
