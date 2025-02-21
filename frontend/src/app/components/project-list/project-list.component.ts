import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMapComponent } from '../project-map/project-map.component';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectMapComponent],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  center: { lat: number; lng: number } = { lat: 4.711, lng: -74.0721 };

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    console.log('center>', this.center); // Verificar si center tiene valor antes de la llamada
    if (!this.center) {
      console.error('Error: center no está definido.');
      return;
    }

    this.projectService.getProjects(this.center).subscribe({
      next: (data) => this.projects = data,
      error: (err) => console.error('Error al obtener proyectos:', err)
    });
  }


  selectProject(project: Project | null) {
    this.selectedProject = project;

    this.center = this.selectedProject
    ? { lat: this.selectedProject?.lat ?? 4.711, lng: this.selectedProject?.lng ?? -74.0721 }
    : { lat: 4.711, lng: -74.0721 };

  }
}
