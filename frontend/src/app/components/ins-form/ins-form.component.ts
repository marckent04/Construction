import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/Authentification/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ins-form',
  templateUrl: './ins-form.component.html',
  styleUrls: ['./ins-form.component.css']
})
export class InsFormComponent implements OnInit {

  err = {
    mail: '',
    prof: ''
  }

  controls = {
    mail: null,
    mdp: null
  }

  constructor(private auth: AuthService, private route: Router) {
  }

  ngOnInit() {
  }

  user:User = {id: null, name: null, fname: null, mail: null, work: null, mdp: null, picture: null}

  inscription(form: NgForm) {
    let r1 = /^(([^<()[\]\\.,;:\s@\]+(\.[^<()[\]\\.,;:\s@\]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    
    if(r1.test(form.value.mail)) {
      this.controls.mail =  true;
      this.user.fname = form.value.fname;
      this.user.name = form.value.name;
      this.user.mail = form.value.mail;
      this.user.mdp = form.value.pass1;
      this.user.work = form.value.work;

      this.auth.inscription(this.user).subscribe(
        (data) => {
          if(data) {
            this.route.navigate(['/connexion']);
          }
          else {
            this.err.mail = 'Adresse mail deja utlisee';
          }
        }
      )
    }
    else {
      this.controls.mail =  false;
      this.err.mail = 'Email incoreect';
    }
  }
}
