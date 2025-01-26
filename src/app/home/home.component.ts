import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { trigger, transition, style, animate, query, stagger } from "@angular/animations"

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="home-container">
      <div class="profile-image">
        <img src="assets/profile-image.jpg" alt="Your Name">
      </div>
      <div class="intro-text" [@fadeInAnimation]>
        <h1>Your Name</h1>
        <h2>Web Developer</h2>
        <p>Passionate about creating beautiful and functional web applications.</p>
        <div class="skills" [@listAnimation]="skills.length">
          <span *ngFor="let skill of skills">{{skill}}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .home-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: calc(100vh - 120px);
      text-align: center;
    }
    .profile-image img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 2rem;
      border: 4px solid #00a8ff;
    }
    .intro-text h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    .intro-text h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #00a8ff;
    }
    .skills {
      margin-top: 1rem;
    }
    .skills span {
      display: inline-block;
      background-color: #00a8ff;
      color: white;
      padding: 0.5rem 1rem;
      margin: 0.25rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }
  `,
  ],
  animations: [
    trigger("fadeInAnimation", [transition(":enter", [style({ opacity: 0 }), animate("1s", style({ opacity: 1 }))])]),
    trigger("listAnimation", [
      transition("* => *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-15px)" }),
            stagger(100, [animate("500ms", style({ opacity: 1, transform: "translateY(0)" }))]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  skills: string[] = ["Angular", "TypeScript", "HTML", "CSS", "JavaScript", "Node.js"]
}

