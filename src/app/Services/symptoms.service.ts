import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SymptomsService {
  constructor(private http: HttpClient) {}

  //Same remarque as the other Service
  public sendSymptoms(data: FormData): Observable<any> {
    return this.http.post("linkBackendAPI", data);
  }
}
