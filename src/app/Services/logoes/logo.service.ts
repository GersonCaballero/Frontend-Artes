import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Logo } from 'src/app/Models/logoes/logo';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  baseUrl: string = "https://localhost:44368/api/";

  constructor(private httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  getLogo(){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Logoes`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  postLogo(logo: Logo){
    var Token = localStorage.getItem("Token");
    debugger
    return this.httpClient.post(`${this.baseUrl}Logoes`, logo, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }
}
