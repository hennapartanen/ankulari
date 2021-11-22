import { Project } from './../project.model';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})

export class ProjectDetailComponent implements OnInit {
  project: Project;
  id: number;

  constructor(private projectService: ProjectService,
              private route: ActivatedRoute,
              private router: Router) {}


  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.project = this.projectService.getProject(this.id);
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  onDeleteRecipe() {
    this.projectService.deleteProject(this.id);
    this.router.navigate(['/project']);
  }

}
