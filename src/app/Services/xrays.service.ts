import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class XraysService {
  constructor(private http: HttpClient) {}

  public sendXraysImg(data: FormData): Observable<any> {
    // You put the backend API in here and then the result will comeback to the Xrays Component
    return this.http.post("linkBackend", data);
  }
}
