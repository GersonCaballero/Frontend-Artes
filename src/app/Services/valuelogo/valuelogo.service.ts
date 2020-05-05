import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Valuelogo } from 'src/app/Models/valuelogo/valuelogo';

@Injectable({
  providedIn: 'root'
})
export class ValuelogoService {
  baseUrl: string = "https://localhost:44368/api/";

  constructor(private httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  getValueLogo(){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}ValueLogoes`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  postValueLogo(valuelogo: Valuelogo){
    var Token = localStorage.getItem("Token");
    debugger
    return this.httpClient.post(`${this.baseUrl}ValueLogoes`, valuelogo, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }
}
