import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <h1>My Projects</h1>
      <div class="filter-buttons">
        <button (click)="filterProjects('all')" [class.active]="currentFilter === 'all'">All</button>
        <button (click)="filterProjects('angular')" [class.active]="currentFilter === 'angular'">Angular</button>
        <button (click)="filterProjects('react')" [class.active]="currentFilter === 'react'">React</button>
        <button (click)="filterProjects('node')" [class.active]="currentFilter === 'node'">Node.js</button>
      </div>
      <div class="projects-grid">
        <div *ngFor="let project of filteredProjects" class="project-card">
          <img [src]="project.image" [alt]="project.title">
          <h3>{{project.title}}</h3>
          <p>{{project.description}}</p>
          <div class="technologies">
            <span *ngFor="let tech of project.technologies">{{tech}}</span>
          </div>
          <a [href]="project.link" target="_blank" class="view-project">View Project</a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      text-align: center;
      color: #00a8ff;
    }
    .filter-buttons {
      display: flex;
      justify-content: center;
      margin-bottom: 2rem;
    }
    .filter-buttons button {
      background-color: transparent;
      border: 2px solid #00a8ff;
      color: #00a8ff;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .filter-buttons button.active,
    .filter-buttons button:hover {
      background-color: #00a8ff;
      color: white;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    .project-card {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    .project-card:hover {
      transform: translateY(-5px);
    }
    .project-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .project-card h3 {
      padding: 1rem;
      margin: 0;
      color: #00a8ff;
    }
    .project-card p {
      padding: 0 1rem;
      font-size: 0.9rem;
    }
    .technologies {
      padding: 0 1rem 1rem;
    }
    .technologies span {
      display: inline-block;
      background-color: #00a8ff;
      color: white;
      padding: 0.25rem 0.5rem;
      margin: 0.25rem;
      border-radius: 20px;
      font-size: 0.8rem;
    }
    .view-project {
      display: block;
      background-color: #00a8ff;
      color: white;
      text-align: center;
      padding: 0.75rem;
      text-decoration: none;
      transition: background-color 0.3s ease;
    }
    .view-project:hover {
      background-color: #0077b3;
    }
  `,
  ],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "Project 1",
      description: "A brief description of Project 1",
      technologies: ["Angular", "TypeScript", "Node.js"],
      image: "assets/project1.jpg",
      link: "https://project1.com",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2",
      technologies: ["React", "JavaScript", "Express"],
      image: "assets/project2.jpg",
      link: "https://project2.com",
    },
    // Add more projects here
  ]

  filteredProjects: Project[] = this.projects
  currentFilter = "all"

  filterProjects(filter: string) {
    this.currentFilter = filter
    if (filter === "all") {
      this.filteredProjects = this.projects
    } else {
      this.filteredProjects = this.projects.filter((project) =>
        project.technologies.map((tech) => tech.toLowerCase()).includes(filter),
      )
    }
  }
}

