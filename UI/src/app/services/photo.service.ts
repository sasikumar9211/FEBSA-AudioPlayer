import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseURL: string = "http://localhost:5000/";

  constructor(private http: HttpClient) {
  }

  captureExpression(b64Image:String): Observable<any> {
    const headers = { 'content-type': 'application/json','access-control-allow-origin':"*"};
    const body=JSON.stringify(b64Image.substring(23));
    console.log(body)
    return this.http.post(this.baseURL + 'image', body,{'headers':headers})
  }
}
