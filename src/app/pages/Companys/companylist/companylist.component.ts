import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/companies/company.service';
import { Router } from '@angular/router';
import { Company } from 'src/app/Models/companies/company';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanylistComponent implements OnInit {

  listdata: Array<Company>;

  constructor(private service: CompanyService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.listData()
  }

  listData() {
    this.service.getCompanies()
      .subscribe((data: any) => {
        this.listdata = data;
      },
        (error: any) => {
          // this.messageTittle = "Error";
          // this.messageBody = error.status + ' - ' + error.Message;
        }
      );
  }

}
