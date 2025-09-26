import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-new-beginning',
  standalone: true,
  imports: [RouterLink,HeadComponent,NavbarComponent,FooterComponent,WelcomeComponent,RouterOutlet],
  templateUrl: './new-beginning.component.html',
  styleUrl: './new-beginning.component.css'
})
export class NewBeginningComponent {

}
