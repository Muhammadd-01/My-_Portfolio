import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Blog</h1>
    <p>This is the blog page.</p>
  `,
  styles: [],
})
export class BlogComponent {}

