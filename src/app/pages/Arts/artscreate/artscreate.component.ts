import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/Models/companies/company';
import { ArtService } from 'src/app/Services/arts/art.service';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/companies/company.service';
import { Art } from 'src/app/Models/arts/art';

@Component({
  selector: 'app-artscreate',
  templateUrl: './artscreate.component.html',
  styleUrls: ['./artscreate.component.scss']
})
export class ArtscreateComponent implements OnInit {

  messagefalse: string;
  messagetrue: string;
  ArtName: String;
  Description: string;
  ImageURL: string;
  IdCompany: number;

  listcompanies: Array<Company>;

  constructor(private service: ArtService, private router: Router, private serviceCompany: CompanyService) { 
    this.service = service;
    this.router = router;
    this.serviceCompany = serviceCompany;
  }

  ngOnInit() {
    this.dataCompany()
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

  Guardar(){
    var art = new Art();
    art.ArtName = this.ArtName
    art.Description = this.Description
    art.ImageURL = this.ImageURL
    art.IdCompany = Number(this.IdCompany)
    art.State = true
    art.CreateDate = new Date()
    art.ModifiedDate = new Date()
    
    this.Enviar(art);
  }

  Enviar(art: Art){
    debugger
    this.service.postArt(art)
    .subscribe((data: any)=>{
        debugger
        this.messagefalse = "";
        this.messagetrue = data.message;
        return;

        this.router.navigate(['/art/list']);
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
