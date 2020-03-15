import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
