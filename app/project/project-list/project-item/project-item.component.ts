import { Project } from '../../project.model';
import { Component, OnInit, Input,} from '@angular/core';



@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})

export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


}
