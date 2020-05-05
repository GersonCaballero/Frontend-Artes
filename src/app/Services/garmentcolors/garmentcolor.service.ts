import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Garmentcolor } from 'src/app/Models/garmentcolors/garmentcolor';

@Injectable({
  providedIn: 'root'
})
export class GarmentcolorService {
  baseUrl: string = "https://localhost:44368/api/";

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getGarmentColor(){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}GarmentColors`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  postGarmentColor(garmentcolor: Garmentcolor){
    var Token = localStorage.getItem("Token");
    return this.httpClient.post(`${this.baseUrl}GarmentColors`, garmentcolor, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }
}
