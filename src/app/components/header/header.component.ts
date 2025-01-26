import { Component } from "@angular/core"
import type { DarkModeService } from "../../services/dark-mode.service"

@Component({
  selector: "app-header",
  template: `
    <header>
      <nav>
        <ul>
          <li><a routerLink="/">Home</a></li>
          <li><a routerLink="/about">About</a></li>
          <li><a routerLink="/projects">Projects</a></li>
          <li><a routerLink="/skills">Skills</a></li>
          <li><a routerLink="/contact">Contact</a></li>
          <li><a routerLink="/blog">Blog</a></li>
        </ul>
      </nav>
      <button (click)="toggleDarkMode()">
        {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
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
    }
    button {
      background-color: #ffffff;
      color: #001a33;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
  `,
  ],
})
export class HeaderComponent {
  isDarkMode = false

  constructor(private darkModeService: DarkModeService) {
    this.darkModeService.isDarkMode$.subscribe((isDarkMode) => (this.isDarkMode = isDarkMode))
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode()
  }
}

