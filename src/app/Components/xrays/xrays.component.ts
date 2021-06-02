import { Component, OnInit } from "@angular/core";
import { XraysService } from "src/app/Services/xrays.service";

@Component({
  selector: "app-xrays",
  templateUrl: "./xrays.component.html",
  styleUrls: ["./xrays.component.css"],
})
export class XraysComponent implements OnInit {
  fileData: File = null;

  XraysResult;

  constructor(private service: XraysService) {}

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }
  ngOnInit() {}

  onSubmit() {
    let data: FormData = new FormData();
    data.append("image", this.fileData);

    //displaying the imae Object
    console.log(this.fileData);

    //sending the image to the XraysService and waiting for the response to show it in the interface
    // this.service.sendXraysImg(data).subscribe(
    //   res=> this.XraysResult = res.result
    // )
  }
}
