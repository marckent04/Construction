import { Component, OnInit } from '@angular/core';
import { CreateService } from 'src/app/services/create/create.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  constructor(private create: CreateService, private activateRoute: ActivatedRoute, private spinner: NgxSpinnerService) {
    this.idProject = this.activateRoute.parent.params._value.id;
  }
  idProject: number;
  currentTask: string;
  success = false;

  err = { time: '' };

  close() {
    this.success = false;
  }

  addTask(form: NgForm) {
    if (confirm('Voulez-vous ajouter cette tache ?')) {
      this.spinner.show();
      this.err.time = '';
      let success = true;
      const values = form.value;
      const idP: string = this.idProject.toString();

      if (values.begin > values.deadline) {
        this.spinner.hide();
        this.err.time = 'la date de fin ne peut pas etre avant la date de debut';
        success = false;
      }

      if (success) {
        const f = new FormData();
        f.append('title', values.title);
        f.append('respo', values.respo);
        f.append('begin', values.begin);
        f.append('deadline', values.deadline);
        f.append('besoin', values.besoin);
        f.append('montant', values.mtn);
        f.append('description', values.comment);
        f.append('idProject', idP);

        this.create.task(f).subscribe(
          (data) => {
            this.spinner.hide();
            if (data) {
              this.success = true;
              form.reset()
            }
          }
        );
    }
  }


}


  ngOnInit() {
  }

}
