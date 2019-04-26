import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read/read.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CreateService } from 'src/app/services/create/create.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  constructor(private read: ReadService,
              private activateRoute: ActivatedRoute,
              private create: CreateService,
              private spinner: NgxSpinnerService
    ) {
    const idP = this.activateRoute.parent.params._value.id;
    this.id = idP;
    this.read.depenses(+idP).subscribe(
      (data) => {
        this.depenses = data;
        this.depenses.forEach(dp => {
          this.TotalDepenses += parseFloat(dp.montant);
        });
      }
    );


  }

  id: string;
  TotalDepenses = 0;
  depenses;
  public isCollapsed = false;
  isSuccess = false;

  refresh(id: number) {
    this.read.depenses(id).subscribe(
      (data) => {
        this.depenses = data;
        this.depenses.forEach(dp => {
          this.TotalDepenses += parseFloat(dp.montant);
        });
      }
    );
  }

  add(form: NgForm) {
    this.spinner.show();
    const f = new FormData();
    f.append('lib', form.value.lib);
    f.append('montant', form.value.montant);
    f.append('date', form.value.date);
    f.append('comment', form.value.comment);
    f.append('id', this.id);
    this.create.depense(f).subscribe(
      (data) => {
        this.spinner.hide();
        if (data) {
          this.refresh(+this.id);
          form.reset();
        }
      }
    )
  }

  ngOnInit() {
  }



}
