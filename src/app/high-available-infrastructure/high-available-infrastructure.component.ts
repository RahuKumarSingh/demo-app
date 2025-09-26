import { Component } from '@angular/core';
import { HeadComponent } from '../head/head.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServerlessFetureComponent } from '../serverless-feture/serverless-feture.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-high-available-infrastructure',
    standalone: true,
    templateUrl: './high-available-infrastructure.component.html',
    styleUrl: './high-available-infrastructure.component.css',
    imports: [HeadComponent, NavbarComponent, ServerlessFetureComponent, RouterLink, RouterOutlet, FooterComponent]
})
export class HighAvailableInfrastructureComponent {

}
