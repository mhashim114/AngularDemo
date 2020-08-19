import { Routes } from '@angular/router';

//import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactusComponent } from '../contactus/contactus.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
