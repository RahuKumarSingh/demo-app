import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeadComponent } from '../head/head.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { WelcomeComponent } from '../welcome/welcome.component';

@Component({
  selector: 'app-serverless-feture',
  standalone: true,
  imports: [RouterLink,HeadComponent,NavbarComponent,FooterComponent,WelcomeComponent,RouterOutlet],
  templateUrl: './serverless-feture.component.html',
  styleUrl: './serverless-feture.component.css'
})
export class ServerlessFetureComponent {
 number = `{"number": $input.params('number')}`
}
