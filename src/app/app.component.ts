import { Component, type OnInit } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterOutlet } from "@angular/router"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import type { DarkModeService } from "./services/dark-mode.service"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div>
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <a href="https://wa.me/03128538773" class="whatsapp-icon" target="_blank">
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  `,
  styles: [
    `
    :host {
      display: block;
      min-height: 100vh;
    }
    main {
      padding: 20px;
      min-height: calc(100vh - 120px);
    }
    .whatsapp-icon {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25D366;
      color: white;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      z-index: 1000;
    }
    .whatsapp-icon:hover {
      transform: scale(1.1);
    }
  `,
  ],
})
export class AppComponent implements OnInit {
  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    // Initialize dark mode based on user preference or system setting
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDarkMode) {
      this.darkModeService.toggleDarkMode()
    }
  }
}

