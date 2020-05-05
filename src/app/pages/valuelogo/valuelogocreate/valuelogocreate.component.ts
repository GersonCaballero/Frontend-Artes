import { Component, OnInit } from '@angular/core';
import { Valuelogo } from 'src/app/Models/valuelogo/valuelogo';
import { getLocaleDateTimeFormat } from '@angular/common';
import { ValuelogoService } from 'src/app/Services/valuelogo/valuelogo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valuelogocreate',
  templateUrl: './valuelogocreate.component.html',
  styleUrls: ['./valuelogocreate.component.scss']
})
export class ValuelogocreateComponent implements OnInit {

  
  Name: string;
  Description: string;
  messagefalse: string;
  messagetrue: string;

  constructor(private service: ValuelogoService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  Guardar(){
    var valuelogo = new Valuelogo();
    valuelogo.Name = this.Name
    valuelogo.Description = this.Description
    valuelogo.State = true
    valuelogo.CreateDate = new Date()
    valuelogo.ModifiedDate = new Date()
    
    this.Enviar(valuelogo);
  }

  Enviar(valuelogo: Valuelogo){
    debugger
    this.service.postValueLogo(valuelogo)
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
