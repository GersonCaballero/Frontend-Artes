import { Component, OnInit } from '@angular/core';
import { LogoService } from 'src/app/Services/logoes/logo.service';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/companies/company.service';
import { Company } from 'src/app/Models/companies/company';
import { Valuelogo } from 'src/app/Models/valuelogo/valuelogo';
import { ValuelogoService } from 'src/app/Services/valuelogo/valuelogo.service';
import { Garmentcolor } from 'src/app/Models/garmentcolors/garmentcolor';
import { GarmentcolorService } from 'src/app/Services/garmentcolors/garmentcolor.service';
import { Logo } from 'src/app/Models/logoes/logo';

@Component({
  selector: 'app-logoescreate',
  templateUrl: './logoescreate.component.html',
  styleUrls: ['./logoescreate.component.scss']
})
export class LogoescreateComponent implements OnInit {

  messagefalse: string;
  messagetrue: string;
  NameLogo: string;
  Description: string;
  IdCompany: number;
  IdValueLogo: number;
  IdGarmentColor: number;
  ImageURL: string;
  ArchiveURL: string;

  listcompanies: Array<Company>;
  listvaluelogos: Array<Valuelogo>;
  listgarmentcolor: Array<Garmentcolor>;

  constructor(private service: LogoService, private router: Router, private serviceCompany: CompanyService, private serviceValueLogo: ValuelogoService, private serviceGarmentColor: GarmentcolorService) { 
    this.service = service;
    this.router = router;
    this.serviceCompany = serviceCompany;
    this.serviceValueLogo = serviceValueLogo;
    this.serviceGarmentColor = serviceGarmentColor;
  }

  ngOnInit() {
    this.dataCompany();
    this.dataValuelogo();
    this.dataGarmentColor();
  }

  dataCompany(){
    this.serviceCompany.getCompanies()
      .subscribe((data: any) => {
        this.listcompanies = data;
      },
        (error: any) => {
          // this.messageTittle = "Error";
          // this.messageBody = error.status + ' - ' + error.Message;
        }
      );
  }

  dataValuelogo(){
    this.serviceValueLogo.getValueLogo()
      .subscribe((data: any) => {
        this.listvaluelogos = data;
      },
        (error: any) => {
          // this.messageTittle = "Error";
          // this.messageBody = error.status + ' - ' + error.Message;
        }
      );
  }

  dataGarmentColor(){
    this.serviceGarmentColor.getGarmentColor()
      .subscribe((data: any) => {
        this.listgarmentcolor = data;
      },
        (error: any) => {
          // this.messageTittle = "Error";
          // this.messageBody = error.status + ' - ' + error.Message;
        }
      );
  }

  Guardar(){
    var logo = new Logo();
    logo.NameLogo = this.NameLogo
    logo.Description = this.Description
    logo.ImageURL = this.ImageURL;
    logo.ArchiveURL = this.ArchiveURL;
    logo.IdCompany = Number(this.IdCompany)
    logo.IdGarmentColor = this.IdGarmentColor;
    logo.IdValueLogo = this.IdValueLogo;
    logo.Status = true;
    logo.CreateDate = new Date()
    logo.ModifiedDate = new Date()
    
    this.Enviar(logo);
  }

  Enviar(logo: Logo){
    this.service.postLogo(logo)
    .subscribe((data: any)=>{
        debugger
        this.messagefalse = "";
        this.messagetrue = data.message;
        return;

        this.router.navigate(['/logoes/list']);
    },
    (error : any) => {
      debugger
      this.messagetrue = "";
      this.messagefalse = error.status + '-' + error.Message;
    });
  }

  readURL(input) {
    debugger
    if (input.files && input.files[0]) {
      
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
        debugger
        const csv: string = reader.result as string;
        $('.file-upload-image').attr('src', csv);
        $('.file-upload-content').show();
        debugger
        $('.image-title').html(input.files[0].name);
      };
  
      reader.readAsDataURL(input.files[0]);  
      
      $('.image-upload-wrap').bind('dragover', function () {
        $('.image-upload-wrap').addClass('image-dropping');
      });
  
      $('.image-upload-wrap').bind('dragleave', function () {
        $('.image-upload-wrap').removeClass('image-dropping');
      });
  
    } else {
      this.removeUpload();
    }
  }
  
  removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();

    $('.image-upload-wrap').bind('dragover', function () {
      $('.image-upload-wrap').addClass('image-dropping');
    });

    $('.image-upload-wrap').bind('dragleave', function () {
      $('.image-upload-wrap').removeClass('image-dropping');
    });
  }
}