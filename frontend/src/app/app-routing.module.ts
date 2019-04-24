import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { PageConnexionComponent } from './pages/page-connexion/page-connexion.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DashPageComponent } from './pages/dash-page/dash-page.component';
import { IsAuthService } from './services/IsAuth/is-auth.service';
import { IsCnnectedGuard } from './guards/is-cnnected.guard';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { UinfosComponent } from './components/uinfos/uinfos.component';
import { NotifsComponent } from './components/notifs/notifs.component';
import { DetailsProjectComponent } from './components/details-project/details-project.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { AddIntComponent } from './components/add-int/add-int.component';
import { GalerieComponent } from './components/galerie/galerie.component';
import { TachesComponent } from './components/taches/taches.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {path: 'inscription', canActivate: [IsAuthService], component: PageInscriptionComponent},
  {path: 'connexion', canActivate: [IsAuthService], component: PageConnexionComponent},
  {path: 'about',  canActivate: [IsAuthService], component: AboutPageComponent},
  {path: '',  canActivate: [IsAuthService], component: AcceuilComponent},

  //dashboard
  { path: 'welcome', canActivate: [IsCnnectedGuard], component: DashPageComponent, children:[
    { path: 'projects', component: ProjectsComponent, outlet: 'options'},
    { path: 'add', component: AddProjectComponent, outlet: 'options'},
    { path: 'profile', component: UinfosComponent, outlet: 'options'},
    { path: 'news', component: NotifsComponent, outlet: 'options'},
    {path: '', component: ProjectsComponent, outlet: 'options'}
  ]},

  {path: 'project/:id', canActivate: [IsCnnectedGuard], component: ProjectPageComponent, children: [
    {path: '', component: DetailsProjectComponent, outlet: 'project'},
    {path: 'addInt', component: AddIntComponent, outlet: 'project'},
    {path: 'addT', component: AddTaskComponent, outlet: 'project'},
    {path: 'galerie', component: GalerieComponent, outlet: 'project'},
    {path: 'taches', component: TachesComponent, outlet: 'project'},
    {path: 'ressources', component: RessourcesComponent, outlet: 'project'},
  ]},

  {path: 'success', canActivate: [IsCnnectedGuard], component: SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
