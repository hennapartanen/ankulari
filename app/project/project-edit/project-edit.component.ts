import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl,  Validators, } from '@angular/forms';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']

})
export class ProjectEditComponent implements OnInit {
  id: number;
  editMode = false;
  projectForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {

    if (this.editMode) {
      this.projectService.updateProject(this.id, this.projectForm.value);
    } else {
      this.projectService.addProject(this.projectForm.value);
    }
    this.onCancel();
  }


  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let projectName = '';
    let projectImagePath = '';
    let projectDate = ''

    if (this.editMode) {
      const project = this.projectService.getProject(this.id);
      projectName = project.name;
      projectImagePath = project.imagePath;
      projectDate = project.date;



    this.projectForm = new FormGroup({
      'name': new FormControl(projectName, Validators.required),
      'imagePath': new FormControl(projectImagePath, Validators.required),
      'date': new FormControl(projectDate, Validators.required),

    });


  }
}
}
