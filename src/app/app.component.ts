import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet, RouterLink } from "@angular/router"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>My Portfolio</h1>
    <nav>
      <a routerLink="/">Home</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/projects">Projects</a> |
      <a routerLink="/skills">Skills</a> |
      <a routerLink="/contact">Contact</a> |
      <a routerLink="/blog">Blog</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
    nav {
      margin-bottom: 1rem;
    }
    a {
      margin-right: 0.5rem;
    }
  `,
  ],
})
export class AppComponent {
  title = "angular-portfolio"
}

