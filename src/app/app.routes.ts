import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ErrorPageComponent } from './error-page/error-page.component';
import { HighAvailableInfrastructureComponent } from './high-available-infrastructure/high-available-infrastructure.component';
import { ServerlessFetureComponent } from './serverless-feture/serverless-feture.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { CloudMigrationComponent } from './cloud-migration/cloud-migration.component';
import { DomainNameComponent } from './domain-name/domain-name.component';
import { CommingHomeComponent } from './comming-home/comming-home.component';
import { NewBeginningComponent } from './new-beginning/new-beginning.component';

export const routes: Routes = [

    {path:"", component:HomeComponent},
    {path:"welcome",component:WelcomeComponent},
    {path:"available", component:HighAvailableInfrastructureComponent},
    {path:"serverless", component:ServerlessFetureComponent},
    {path:"marketplace", component:MarketplaceComponent},
    {path:"migration", component:CloudMigrationComponent},
    {path:"domain-name", component:DomainNameComponent},
    {path:"comming-home", component:CommingHomeComponent},
    {path:"new-beginning",component:NewBeginningComponent},
    
    {path:"**", component:ErrorPageComponent},
];
