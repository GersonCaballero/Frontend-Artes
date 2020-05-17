import { Component, OnInit } from '@angular/core';
import { Logo } from 'src/app/Models/logoes/logo';
import { LogoService } from 'src/app/Services/logoes/logo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoeslist',
  templateUrl: './logoeslist.component.html',
  styleUrls: ['./logoeslist.component.scss']
})
export class LogoeslistComponent implements OnInit {
  listdata: Array<Logo>;

  constructor(private service: LogoService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.listData()
  }

  listData() {
    this.service.getLogo()
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
