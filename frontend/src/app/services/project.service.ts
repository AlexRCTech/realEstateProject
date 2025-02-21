import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) {}

  getProjects(center: { lat: number; lng: number }): Observable<Project[]> {
    console.log('Recibido en getProjects:', center); // Depuración
    return this.http.get<Project[]>(this.apiUrl, {
      params: {
        origin: `${center.lat}, ${center.lng}`,
        size: 10,
      }
    });
  }
}
