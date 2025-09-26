import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { HeadComponent } from '../head/head.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { WelcomeComponent } from '../welcome/welcome.component';
@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [RouterLink,HeadComponent,NavbarComponent,FooterComponent,WelcomeComponent,RouterOutlet],
  templateUrl: './marketplace.component.html',
  styleUrl: './marketplace.component.css'
})
export class MarketplaceComponent {

}
