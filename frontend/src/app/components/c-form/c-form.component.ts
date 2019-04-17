import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/Authentification/auth.service';
import { Router } from '@angular/router';
import {ValidCo} from 'src/app/models/ValidCo';

@Component({
  selector: 'app-c-form',
  templateUrl: './c-form.component.html',
  styleUrls: ['./c-form.component.css']
})
export class CFormComponent implements OnInit {
  constructor(private route: Router, private auth: AuthService) { }
  img1 = './assets/carousel/1.jpg';
  img2 = './assets/carousel/2.jpg';
  img3 = './assets/carousel/3.jpg';
  ngOnInit() {
  }

  err = { mail: null, mdp :null}


  user: User = {id: null, name: null, fname: null, mail: null, work: null, mdp: null, picture: null};

  connexion (form: NgForm) {
    // tslint:disable-next-line:max-line-length
    const r1 = /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

    if(!r1.test(form.value.mail)) {
      this.err.mail = null;
      this.err.mdp = null;
      this.err.mail = 'Adresse mail incorrecte';
    } else {
      this.user.mail = form.value.mail;
      this.user.mdp = form.value.mdp;
      this.auth.connexion(this.user).subscribe(
        (data: ValidCo) => {
          if (data.mailR === 0) {
            this.err.mail = 'Ce compte n\'existe pas';
          } else {
            this.err.mail = '';
            if (data.mdpR === 0) {
              this.err.mdp = 'Mot de passe incorrect';
            }
          }

          if ((data.mailR === 1) && (data.mdpR === 1 )) {
            //this.auth.verifyAuth();
            localStorage.setItem('id', data.id);
            localStorage.setItem('fname', data.fname);
            localStorage.setItem('name', data.name);
            localStorage.setItem('work', data.work);
            localStorage.setItem('mail', data.mail);
            localStorage.setItem('mdp', data.mdp);
            localStorage.setItem('picture', data.picture);
            this.route.navigate(['/welcome']);
          }
        }
      )
    }
  }

}
