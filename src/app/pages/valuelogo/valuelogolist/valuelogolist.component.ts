import { Component, OnInit } from '@angular/core';
import { ValuelogoService } from 'src/app/Services/valuelogo/valuelogo.service';
import { Router } from '@angular/router';
import { Valuelogo } from 'src/app/Models/valuelogo/valuelogo';

@Component({
  selector: 'app-valuelogolist',
  templateUrl: './valuelogolist.component.html',
  styleUrls: ['./valuelogolist.component.scss']
})
export class ValuelogolistComponent implements OnInit {

  listdata: Array<Valuelogo>;

  constructor(private service: ValuelogoService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.listData()
  }

  listData() {
    this.service.getValueLogo()
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
