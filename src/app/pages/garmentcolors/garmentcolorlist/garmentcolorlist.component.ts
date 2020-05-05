import { Component, OnInit } from '@angular/core';
import { Garmentcolor } from 'src/app/Models/garmentcolors/garmentcolor';
import { Router } from '@angular/router';
import { GarmentcolorService } from 'src/app/Services/garmentcolors/garmentcolor.service';

@Component({
  selector: 'app-garmentcolorlist',
  templateUrl: './garmentcolorlist.component.html',
  styleUrls: ['./garmentcolorlist.component.scss']
})
export class GarmentcolorlistComponent implements OnInit {

  listdata: Array<Garmentcolor>;

  constructor(private service: GarmentcolorService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
    this.listData()
  }

  listData() {
    this.service.getGarmentColor()
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
