import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/Services/companies/company.service';
import { Company } from 'src/app/Models/companies/company';


@Component({
  selector: 'app-companycreate',
  templateUrl: './companycreate.component.html',
  styleUrls: ['./companycreate.component.scss']
})
export class CompanycreateComponent implements OnInit {

  messagefalse: string;
  messagetrue: string;
  CompanyName: string;
  Code: string;
  Description: string;
  Direction: string;
  City: string;
  Department: string;
  ImageURL: string;

  constructor(private service: CompanyService, private router: Router) { 
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  Guardar(){
    var company = new Company();
    company.CompanyName = this.CompanyName
    company.Code = this.Code
    company.Description = this.Description
    company.Direction = this.Direction
    company.City = this.City
    company.Department = this.Department
    company.ImageURL = ""
    company.State = true
    company.CreateDate = new Date()
    company.ModifiedDate = new Date()
    
    this.Enviar(company);
  }

  Enviar(data: Company){
    debugger
    this.service.postCompany(data)
    .subscribe((data: any)=>{
        debugger
        this.messagefalse = "";
        this.messagetrue = data.message;
        return;

        this.router.navigate(['/company/list']);
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
