import { type ComponentFixture, TestBed } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing"
import { HeaderComponent } from "./header.component"
import { DarkModeService } from "../dark-mode.service"

describe("HeaderComponent", () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let darkModeService: DarkModeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
      providers: [DarkModeService],
    }).compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    darkModeService = TestBed.inject(DarkModeService)
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("should toggle dark mode when button is clicked", () => {
    spyOn(darkModeService, "toggleDarkMode")
    const button = fixture.nativeElement.querySelector("button")
    button.click()
    expect(darkModeService.toggleDarkMode).toHaveBeenCalled()
  })
})

