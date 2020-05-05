import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/Services/arts/art.service';
import { Router } from '@angular/router';
import { Art } from 'src/app/Models/arts/art';

@Component({
  selector: 'app-artslist',
  templateUrl: './artslist.component.html',
  styleUrls: ['./artslist.component.scss']
})
export class ArtslistComponent implements OnInit {

  listdata: Array<Art>;

  constructor(private service: ArtService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.listData()
  }

  listData() {
    this.service.getArts()
      .subscribe((data: any) => {
        this.listdata = data;
        debugger
      },
        (error: any) => {
          debugger
          // this.messageTittle = "Error";
          // this.messageBody = error.status + ' - ' + error.Message;
        }
      );
  }

}
