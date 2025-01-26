import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Contact Me</h1>
    <p>This is the contact page.</p>
  `,
  styles: [],
})
export class ContactComponent {}

