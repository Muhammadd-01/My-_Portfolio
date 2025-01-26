import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class DarkModeService {
  private darkMode = new BehaviorSubject<boolean>(false)
  darkMode$ = this.darkMode.asObservable()

  toggleDarkMode() {
    this.darkMode.next(!this.darkMode.value)
    if (this.darkMode.value) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }

  isDarkMode(): boolean {
    return this.darkMode.value
  }
}

