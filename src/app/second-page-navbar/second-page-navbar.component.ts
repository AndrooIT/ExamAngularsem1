import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second-page-navbar',
  standalone: true,
  imports: [],
  templateUrl: './second-page-navbar.component.html',
  styleUrl: './second-page-navbar.component.css'
})
export class SecondPageNavbarComponent {

  constructor(private _router: Router) { } 
  navToFirstPage() 
  {this._router.navigate(['/firstComponent'])}
}
