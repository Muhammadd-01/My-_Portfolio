import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm a passionate web developer with a keen interest in creating
        beautiful and functional web applications. With a strong foundation in
        Angular and TypeScript, I strive to build responsive and user-friendly
        interfaces that provide great user experiences.
      </p>
      <p>
        My journey in web development started [Your Start Date/Year], and since
        then, I've been constantly learning and improving my skills. I enjoy
        tackling complex problems and turning them into simple, elegant solutions.
      </p>
      <h2>Education</h2>
      <ul>
        <li>[Your Degree] in [Your Field] - [Your University] ([Graduation Year])</li>
      </ul>
      <h2>Work Experience</h2>
      <ul>
        <li>[Your Job Title] at [Company Name] ([Start Date] - [End Date/Present])</li>
      </ul>
      <button (click)="downloadResume()" class="download-btn">
        <i class="fas fa-download"></i> Download Resume
      </button>
    </div>
  `,
  styles: [
    `
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1, h2 {
      color: #00a8ff;
    }
    p {
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    ul {
      list-style-type: none;
      padding-left: 0;
    }
    li {
      margin-bottom: 0.5rem;
    }
    .download-btn {
      display: inline-block;
      background-color: #00a8ff;
      color: white;
      padding: 0.75rem 1.5rem;
      border: none;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .download-btn:hover {
      background-color: #0077b3;
    }
  `,
  ],
})
export class AboutComponent {
  downloadResume() {
    // Implement resume download logic here
    console.log("Downloading resume...")
  }
}

