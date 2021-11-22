
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ProjectComponent } from './project/project.component';
import { AuthGuard } from './auth/auth.guard';
import { NewcounterComponent } from './newcounter/newcounter.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectStartComponent } from './project/project-start/project-start.component';





const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'auth',component: AuthComponent},
  { path: 'home',component: HomeComponent},

  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard], children: [
    { path: '', component: ProjectStartComponent },
    { path: 'newcounter',component: NewcounterComponent},
    { path: 'new', component: ProjectEditComponent },
    { path: ':id', component: ProjectDetailComponent },
    { path: ':id/edit', component: ProjectEditComponent },
  ] },



];


@NgModule({


  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})

export class AppRoutingModule { }
