import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateService } from 'src/app/services/create/create.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-int',
  templateUrl: './add-int.component.html',
  styleUrls: ['./add-int.component.css']
})
export class AddIntComponent implements OnInit {

  constructor(private create: CreateService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  err = {
    mail: null,
    mdp: null
  };

  adding = false;

  success = false;
  infos: FormData;

  intervenant: string;

  ngOnInit() {
  }

  cancel() {
    this.success = false;
  }

  confirm(form: NgForm) {
    this.spinner.show();
    this.create.invitation(this.infos, 1).subscribe(
      (data) => {
        this.spinner.hide();
        this.success = false;
        this.adding = true;
        form.reset();

      }
    );
  }

  close() {
    this.adding = false;
  }

  onSubmit(form: NgForm) {
    const idProject = this.route.parent.params._value.id;
    this.spinner.show();
    this.err.mail = this.err.mdp = null;
    if (form.value.mail === localStorage.getItem('mail')) {
      this.err.mail = 'entrer le mail d\'un entrepreneur pas le votre';
      this.spinner.hide();
    } else {
      this.infos = new FormData();
      this.infos.append('idProject', idProject);
      this.infos.append('mail', form.value.mail);
      this.infos.append('mdp', form.value.mdp);
      this.infos.append('idUser', localStorage.getItem('id'));
      this.infos.append('lvlInt', form.value.lvlInt);
      this.infos.append('trueMdp', localStorage.getItem('mdp'));

      this.create.invitation(this.infos, 0).subscribe(
        (data: Data) => {
          this.spinner.hide();
          if (data.ok) {
            this.intervenant = `${data.fname} ${data.name}`;
            this.success = true;
          } else {

            if (data.exist) {
              this.err.mail = 'vous avez deja envoye une demande d\'adhesion a ce projet a ce membre';
            }
            if(!data.mdp) {
              this.err.mdp = 'mot de passe incorrect';
            }
          }
        }
      )
    }

  }

}
