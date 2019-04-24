import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/Authentification/auth.service';
import { Router } from '@angular/router';
import {ValidCo} from 'src/app/models/ValidCo';

import { NgxSpinnerService } from 'ngx-spinner';
import { ServerConfigService } from 'src/app/services/config/server-config.service';


@Component({
  selector: 'app-c-form',
  templateUrl: './c-form.component.html',
  styleUrls: ['./c-form.component.css']
})
export class CFormComponent implements OnInit {
  constructor(private route: Router, private auth: AuthService, private spinner: NgxSpinnerService, private config: ServerConfigService) { }
  
  path = this.config.PROFILE_PATH;
  
  imgProfile: string;
  ngOnInit() {
  }

  err = { mail: null, mdp :null}


  user: User = {id: null, name: null, fname: null, mail: null, work: null, mdp: null, picture: null};

  connexion(form: NgForm) {
    const r1 = /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if(!r1.test(form.value.mail)) {
      this.err.mail = null;
      this.err.mdp = null;
      this.err.mail = 'Adresse mail incorrecte';
    } else {
      this.spinner.show();
      this.user.mail = form.value.mail;
      this.user.mdp = form.value.mdp;
      this.auth.connexion(this.user).subscribe(
        (data: ValidCo) => {
          console.log(data);
          if (data.mailR === 0) {
            this.err.mail = 'Ce compte n\'existe pas';
          } else {
            this.err.mail = '';
            if (data.mdpR === 0) {
              this.err.mdp = 'Mot de passe incorrect';
            }
          }
          this.spinner.hide();

          if ((data.mailR === 1) && (data.mdpR === 1 )) {
            localStorage.setItem('id', data.id);
            localStorage.setItem('fname', data.fname);
            localStorage.setItem('name', data.name);
            localStorage.setItem('work', data.Work);
            localStorage.setItem('mail', data.mail);
            localStorage.setItem('mdp', data.mdp);
            localStorage.setItem('picture', `${this.config.PROFILE_PATH}/${data.picture}`);
            localStorage.setItem('type', data.type);
            this.route.navigate(['/welcome']);
          }
        }
      )
    }
  }

}
