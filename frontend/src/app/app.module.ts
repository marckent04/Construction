import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//add
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { InsFormComponent } from './components/ins-form/ins-form.component';
import { CFormComponent } from './components/c-form/c-form.component';

//services
import { AuthService } from './services/Authentification/auth.service';

//pages
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DashPageComponent } from './pages/dash-page/dash-page.component';
import { NavbarCComponent } from './components/navbar-c/navbar-c.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { HeaderCComponent } from './components/header-c/header-c.component';
import { IsAuthService } from './services/IsAuth/is-auth.service';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { UinfosComponent } from './components/uinfos/uinfos.component';
import { NotifsComponent } from './components/notifs/notifs.component';
import { DetailsProjectComponent } from './components/details-project/details-project.component';
import { ProjectComponent } from './templates/project/project.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';





@NgModule({
  declarations: [
    AppComponent,
    InsFormComponent,
    CFormComponent,
    PageInscriptionComponent,
    NavbarComponent,
    AcceuilComponent,
    PageConnexionComponent,
    AboutPageComponent,
    DashPageComponent,
    NavbarCComponent,
    LeftMenuComponent,
    HeaderCComponent,
    ProjectsComponent,
    AddProjectComponent,
    UinfosComponent,
    NotifsComponent,
    DetailsProjectComponent,
    ProjectComponent,
    ProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    IsAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
