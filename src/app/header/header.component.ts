import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterLink, RouterLinkActive } from "@angular/router"
import type { DarkModeService } from "../services/dark-mode.service"

@Component({
  selector: "app-header",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
          <li><a routerLink="/skills" routerLinkActive="active">Skills</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          <li><a routerLink="/blog" routerLinkActive="active">Blog</a></li>
        </ul>
      </nav>
      <button (click)="toggleDarkMode()">
        <i class="fas" [ngClass]="darkModeService.isDarkMode() ? 'fa-sun' : 'fa-moon'"></i>
      </button>
    </header>
  `,
  styles: [
    `
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: linear-gradient(to right, #001a33, #003366);
      color: white;
    }
    nav ul {
      display: flex;
      list-style-type: none;
      padding: 0;
    }
    nav ul li {
      margin-right: 1rem;
    }
    nav ul li a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    nav ul li a:hover, nav ul li a.active {
      color: #00a8ff;
    }
    button {
      background: none;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      transition: color 0.3s ease;
    }
    button:hover {
      color: #00a8ff;
    }
  `,
  ],
})
export class HeaderComponent {
  constructor(public darkModeService: DarkModeService) {}

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode()
  }
}

