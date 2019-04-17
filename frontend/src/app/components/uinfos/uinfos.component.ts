import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
  selector: 'app-uinfos',
  templateUrl: './uinfos.component.html',
  styleUrls: ['./uinfos.component.css']
})
export class UinfosComponent implements OnInit {
  success = false;
  err = {
    amdpErr: null,
    validMdp: null,
    nmdp: null,
    img: null,
    status: false

  };

  infos = {
    name: localStorage.getItem('name'),
    firstname: localStorage.getItem('fname')
  }
  fileSelected: File;

  onUpdate(form: NgForm) {
    this.err.amdpErr = this.err.nmdp = this.err.validMdp = this.err.img = null;
    const updateForm = new FormData();
    const values = form.value;
    updateForm.append('id', localStorage.getItem('id'));
    if (values.amdp) {
      this.err.status = true;
      if (values.nmdp1.length < 8) {
        this.err.status = false;
        this.err.nmdp = 'Le mot de passe doit contenir au moins 8 caracteres';
      } else if (values.nmdp1 !== values.nmdp2) {
        this.err.status = false;
        this.err.validMdp = 'les mots de passe ne correspondent pas';
      }
    }

    if ((this.err.validMdp === null) && values.amdp) {
      updateForm.append('amdp', values.amdp);
      updateForm.append('newMdp', values.nmdp1);
    } else {
      updateForm.append('amdp', '');
      updateForm.append('newMdp', '');
    }

    if ((values.name !== localStorage.getItem('name')) && values.name.length > 0) {
      this.err.status = true;
      updateForm.append('name', values.name);
    } else {
      updateForm.append('name', '');
    }

    if ((values.fname !== localStorage.getItem('fname')) && values.fname.length > 0) {
      this.err.status = true;
      updateForm.append('fname', values.fname);
    } else {
      updateForm.append('fname', '');
    }

    if (this.fileSelected) {
      this.err.status = true;
      updateForm.append('image', this.fileSelected, this.fileSelected.name);
    }

    if (this.err.status === true) {
      this.update.user(updateForm).subscribe(
        (data: Data) => {
          if (data.success) {
            this.update.session(+localStorage.getItem('id'));
            this.success = true;
          } else {
            if (!data.mdp) {
              this.err.amdpErr = 'Mot de passe incorrect';
            }

            if (!data.img) {
              this.err.img = 'Ceci n\'est pas une image';
            }
          }
        }
      );
    }


  }

  onFile(event) {
    this.fileSelected = <File>event.target.files[0];
  }

  constructor(private update: UpdateService) { }

  ngOnInit() {
  }

}
