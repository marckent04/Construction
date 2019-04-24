import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateService } from 'src/app/services/create/create.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  imgErr = '';
  dateErr = '';
  fileSelected: File = null;
  status = false;
  urlImg = '';
  create(form: NgForm) {
    this.spinner.show();
    this.imgErr = this.dateErr = '';

    const dateActuelle = Date.now();
    const dateEntree = Date.parse(form.value.date);

    this.status = true;
    if (dateActuelle > dateEntree) {
      this.status = false;
      this.dateErr = 'Il ya une erreur sur la date';
      this.spinner.hide();
    }
    
    if (this.status) {
    const fd = new FormData();
    fd.append('image', this.fileSelected, this.fileSelected.name);
    fd.append('nom', form.value.name);
    fd.append('budget', form.value.budget);
    fd.append('fin', form.value.date);
    fd.append('location', form.value.location);
    fd.append('arch', form.value.arch);
    fd.append('description', form.value.description);
    fd.append('idProprio', localStorage.getItem('id'));


    this.add.project(fd).subscribe((data: Data) => {
      this.spinner.hide();
      if (!data.img) {
        this.imgErr = 'Selectionner une image';
      } else if (!data.upload) {
        this.imgErr = 'Erreur lors du telechargement de la photo';
      }

      if (data.img && data.upload) {
        this.route.navigate(['welcome', {outlets: { options: 'projects'}}]);
      }
     });
    }
  }

  onFile (event) {
    this.fileSelected = <File>event.target.files[0];
  }

  constructor(private add: CreateService, private route: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }
}
