import { Project } from './project.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable()
export class ProjectService {
  projectsChanged = new Subject<Project[]>();

  private projects: Project[] = [
    new Project('Christmas', '24.12.2021',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg', ),

    new Project('New year', '1.1.2022',
      'https://upload.wikimedia.org/wikipedia/commons/d/d1/Kung_Hei_Fat_Choi%21_%286834861529%29.jpg',  )
    ];


  constructor() {}


  getProjects() {
    return this.projects.slice();
  }

  getProject(index: number) {
    return this.projects[index];
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.projectsChanged.next(this.projects.slice());
  }

  updateProject(index: number, newProject: Project) {
    this.projects[index] = newProject;
    this.projectsChanged.next(this.projects.slice());
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.projectsChanged.next(this.projects.slice());
  }
}
