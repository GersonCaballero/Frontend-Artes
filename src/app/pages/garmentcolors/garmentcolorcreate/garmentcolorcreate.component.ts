import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Garmentcolor } from 'src/app/Models/garmentcolors/garmentcolor';
import { GarmentcolorService } from 'src/app/Services/garmentcolors/garmentcolor.service';

@Component({
  selector: 'app-garmentcolorcreate',
  templateUrl: './garmentcolorcreate.component.html',
  styleUrls: ['./garmentcolorcreate.component.scss']
})
export class GarmentcolorcreateComponent implements OnInit {

  Name: string;
  Description: string;
  messagefalse: string;
  messagetrue: string;

  constructor(private service: GarmentcolorService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  Guardar(){
    var data = new Garmentcolor();
    data.Name = this.Name
    data.Description = this.Description
    data.State = true
    data.CreateDate = new Date()
    data.ModifiedDate = new Date()
    
    this.Enviar(data);
  }

  Enviar(data: Garmentcolor){
    debugger
    this.service.postGarmentColor(data)
    .subscribe((data: any)=>{
        debugger
        this.messagefalse = "";
        this.messagetrue = data.message;
        return;

        this.router.navigate(['/valueloge/list']);
    },
    (error : any) => {
      debugger
      this.messagetrue = "";
      this.messagefalse = error.status + '-' + error.Message;
    });
  }
}
