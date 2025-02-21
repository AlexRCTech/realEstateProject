import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectService } from './services/project.service';
import { ProjectListComponent } from '@components/project-list/project-list.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { BannerComponent } from '@components/banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, ProjectListComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {

  }
}
