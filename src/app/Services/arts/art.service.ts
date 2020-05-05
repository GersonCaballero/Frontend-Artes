import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Art } from 'src/app/Models/arts/art';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  baseUrl: string = "https://localhost:44368/api/";

  constructor(private httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  getArts(){
    var Token = localStorage.getItem("Token");
    debugger
    return this.httpClient.get(`${this.baseUrl}Arts`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  postArt(art: Art){
    var Token = localStorage.getItem("Token");
    debugger
    return this.httpClient.post(`${this.baseUrl}Arts`, art, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }
}
