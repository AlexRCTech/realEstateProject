import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './project-map.component.html',
  styleUrls: ['./project-map.component.css'],
})
export class ProjectMapComponent implements OnChanges {
  @Input() projects: Project[] = [];
  @Input() selectedProject: Project | null = null;
  @Input() center: google.maps.LatLngLiteral = { lat: 0, lng: 0 }; // 🔹 Inicializado para evitar undefined

  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  zoom = 10;
  markers: { position: google.maps.LatLngLiteral; title: string }[] = []; // 🔹 Usar objetos estándar

  ngOnChanges(changes: SimpleChanges) {
    this.loadMarkers();
  }

  loadMarkers() {
    if (!this.map?.googleMap) return;

    this.markers = [];

    if (this.selectedProject && this.selectedProject.lat && this.selectedProject.lng) {
      // Verifica que selectedProject tiene lat y lng válidos
      this.center = {
        lat: Number(this.selectedProject.lat) || 4.711,
        lng: Number(this.selectedProject.lng) || -74.0721
      };

      this.markers.push({
        position: this.center,
        title: this.selectedProject.name
      });
    } else {
      // Si no hay proyecto seleccionado, asegurarse de que todos los proyectos tengan lat/lng válidos
      this.markers = this.projects
        .filter(p => p.lat && p.lng) // Filtra proyectos sin coordenadas válidas
        .map(project => ({
          position: { lat: Number(project.lat), lng: Number(project.lng) },
          title: project.name
        }));
    }
  }

}
