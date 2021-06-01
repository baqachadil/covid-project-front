import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
  selector: "app-xrays",
  templateUrl: "./xrays.component.html",
  styleUrls: ["./xrays.component.css"],
})
export class XraysComponent implements OnInit {
  fileData: File = null;

  constructor(private http: HttpClient) {}

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
  ngOnInit() {}

  onSubmit() {
    let data: FormData = new FormData();
    data.append("image", this.fileData);
    console.log(this.fileData);
  }
}
