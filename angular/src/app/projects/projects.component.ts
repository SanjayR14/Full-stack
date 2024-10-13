import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    { id: 1, title: 'Project A', description: 'An analysis of sales data trends.' },
    { id: 2, title: 'Project B', description: 'Exploring machine learning techniques.' },
    { id: 3, title: 'Project C', description: 'Data visualization for market insights.' },
    { id: 4 , title: 'Project D', description: 'Legal connect hub.' },
  ];

  viewProjectDetails(projectId: number) {
    alert('Details for project ID: ' + projectId);
  }
}
