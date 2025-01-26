import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
      <div class="social-links">
        <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="#" target="_blank"><i class="fab fa-github"></i></a>
        <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
      </div>
    </footer>
  `,
  styles: [
    `
    footer {
      background: linear-gradient(to right, #001a33, #003366);
      color: white;
      padding: 1rem;
      text-align: center;
    }
    .social-links {
      margin-top: 0.5rem;
    }
    .social-links a {
      color: white;
      font-size: 1.5rem;
      margin: 0 0.5rem;
      transition: color 0.3s ease;
    }
    .social-links a:hover {
      color: #00a8ff;
    }
  `,
  ],
})
export class FooterComponent {}

