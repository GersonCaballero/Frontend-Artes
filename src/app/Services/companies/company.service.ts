import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from 'src/app/Models/companies/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl: string = "https://localhost:44368/api/";

  constructor(private httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  getCompanies(){
    var Token = localStorage.getItem("Token");
    return this.httpClient.get(`${this.baseUrl}Companies`, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }

  postCompany(company: Company){
    var Token = localStorage.getItem("Token");
    return this.httpClient.post(`${this.baseUrl}Companies`, company, { headers: new HttpHeaders().set('Authorization', 'Bearer '+ Token)});
  }
}
