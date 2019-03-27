import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  public headers: HttpHeaders;
  public baseUrl: string =
    "http://speechrecognitionservices-env.jhnhym9m53.us-east-2.elasticbeanstalk.com";
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.set("content-type", "application/json");
  }

  public getSpeechText(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/", { headers: this.headers });
  }
}
