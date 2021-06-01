import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  Xrays() {
    this.router.navigate(["/xrays"]);
  }

  Symptomes() {
    this.router.navigate(["/symp"]);
  }
}
