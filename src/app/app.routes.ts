import type { Routes } from "@angular/router"

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "about",
    loadComponent: () => import("./about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "projects",
    loadComponent: () => import("./projects/projects.component").then((m) => m.ProjectsComponent),
  },
  {
    path: "skills",
    loadComponent: () => import("./skills/skills.component").then((m) => m.SkillsComponent),
  },
  {
    path: "contact",
    loadComponent: () => import("./contact/contact.component").then((m) => m.ContactComponent),
  },
  {
    path: "blog",
    loadComponent: () => import("./blog/blog.component").then((m) => m.BlogComponent),
  },
  { path: "**", redirectTo: "" },
]

