import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-xrays",
  templateUrl: "./xrays.component.html",
  styleUrls: ["./xrays.component.css"],
})
export class XraysComponent implements OnInit {
  fileName = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFileSelected(event) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData);

      upload$.subscribe();
    }
  }
}
