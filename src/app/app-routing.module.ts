import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RickMortyComponent } from './components/rick-morty/rick-morty.component';
import { LoginComponent } from './components/login/login.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'rick-morty', 
    component: RickMortyComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'nasa', 
    component: NasaComponent,
    canActivate: [AuthGuard]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 