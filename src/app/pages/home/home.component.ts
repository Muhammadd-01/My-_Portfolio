import { Component, type OnInit } from "@angular/core"
import type { Meta, Title } from "@angular/platform-browser"

@Component({
  // ... (template and styles remain the same)
})
export class HomeComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit() {
    this.title.setTitle("Your Name - Web Developer Portfolio")
    this.meta.updateTag({
      name: "description",
      content:
        "Professional portfolio of Your Name, a passionate web developer specializing in creating beautiful and functional web applications.",
    })
    this.meta.updateTag({ name: "keywords", content: "web developer, portfolio, angular, typescript" })
  }
}

