import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import { HeadComponent } from '../head/head.component';
import { NavbarComponent } from '../navbar/navbar.component'; 
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comming-home',
  standalone: true,
  imports: [RouterLink,HeadComponent,NavbarComponent,FooterComponent,WelcomeComponent,RouterOutlet,FooterComponent],
  templateUrl: './comming-home.component.html',
  styleUrl: './comming-home.component.css'
})
export class CommingHomeComponent {
 number = `{"number": $input.params('number')}`
}
