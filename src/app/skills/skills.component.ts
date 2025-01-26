import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>My Skills</h1>
    <p>This is the skills page.</p>
  `,
  styles: [],
})
export class SkillsComponent {}

