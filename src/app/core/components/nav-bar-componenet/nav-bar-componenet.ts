import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LinkComponent } from '../../../shared/components/link-component/link-component';

@Component({
  selector: 'app-nav-bar-componenet', 
  standalone: true,
  imports: [LinkComponent,TranslateModule, RouterModule],
  templateUrl: './nav-bar-componenet.html',
  styleUrl: './nav-bar-componenet.css',
})
export class NavBarComponenet {
  menuOpen = false;

  items = [
  { id: 0, name: 'NAV.PORTFOLIO', section: 'portfolio' },
  { id: 2, name: 'NAV.CONTACT', section: 'contact' },
  { id: 3, name: 'NAV.ABOUT', section: 'about' }
];
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}