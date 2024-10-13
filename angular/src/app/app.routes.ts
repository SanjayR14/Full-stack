import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import your components
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [
  //{ path: 'login', component: LoginComponent },
  //{ path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  //{ path:'login',component:LoginComponent},
  //{ path:'signup',component:SignupComponent},
  

  { path: '', redirectTo: '', pathMatch: 'full' } // Redirect any unknown paths to home
];