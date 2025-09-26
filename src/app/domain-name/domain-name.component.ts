import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { ServerlessFetureComponent } from '../serverless-feture/serverless-feture.component';

@Component({
  selector: 'app-domain-name',
  standalone: true,
  imports: [HeadComponent, NavbarComponent, ServerlessFetureComponent, RouterLink, RouterOutlet, FooterComponent],
  templateUrl: './domain-name.component.html',
  styleUrl: './domain-name.component.css'
})
export class DomainNameComponent {

}
