import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { LoadingSpinnerComponent } from './auth/loading-spinner/loading-spinner.component';
import { HomeComponent} from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { NewcounterComponent } from './newcounter/newcounter.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectItemComponent } from './project/project-list/project-item/project-item.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectService } from './project/project.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    AuthComponent,
    HeaderComponent,
    NewcounterComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectEditComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [  ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
