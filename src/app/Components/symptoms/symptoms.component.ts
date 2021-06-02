import { Component, OnInit } from "@angular/core";
import { SymptomsService } from "src/app/Services/symptoms.service";

@Component({
  selector: "app-symptoms",
  templateUrl: "./symptoms.component.html",
  styleUrls: ["./symptoms.component.css"],
})
export class SymptomsComponent implements OnInit {
  SymptomsResult;
  constructor(private service: SymptomsService) {}

  ngOnInit() {}

  onSubmit(f) {
    let data: FormData = new FormData();
    data.append("Caugh", f.controls.Caugh.value);
    data.append("Fever", f.controls.Fever.value);
    data.append("Sthroat", f.controls.Sthroat.value);
    data.append("Breath", f.controls.Breath.value);
    data.append("Headache", f.controls.Headache.value);
    data.append("Age", f.controls.Age.value);
    data.append("Gender", f.controls.Gender.value);
    data.append("Indication", f.controls.Indication.value);

    //Displaying the data taken from tho Symptoms Form
    data.forEach((value, data) => console.log(data + " : " + value));

    //sending the data to the SymptomsService and waiting for the response to show it in the interface
    // this.service.sendSymptoms(data).subscribe(
    //   res=> this.SymptomsResult = res.result
    // )
  }
}
