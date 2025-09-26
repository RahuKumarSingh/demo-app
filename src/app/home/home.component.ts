import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeadComponent } from '../head/head.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadComponent,NavbarComponent,ContentComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
