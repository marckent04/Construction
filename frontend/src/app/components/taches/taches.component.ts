import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read/read.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { UpdateService } from 'src/app/services/update/update.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  providers: [NgbAccordionConfig],
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  public isCollapsed = false;
  idProject: number;
  files;
  work = +localStorage.getItem('work');
  tasks = [];
  filesSelected = [];

  finished(id) {
    let f = null;
    this.filesSelected = [];
    f = new FormData();

    // tslint:disable-next-line:prefer-const
    for (let file of this.files) {
      this.filesSelected.push(file);
    }

    for (let i = 0; i < this.filesSelected.length; i++) {
      f.append(`img${i}`, this.filesSelected[i], this.filesSelected[i].name);
    }

    f.append('id', id);

    this.up.taskStatus(f).subscribe(
      (data: Data) => {
        console.log(data);
        if (data.upload) {
        this.refresh();
      }
      }
    );

  }

  onFiles(event) {
    this.files = event.target.files;
  }

  update(id: string | number, choice: string | number) {
    let ok = true;
    if (+choice === 0) {
      if (!confirm('Souhaitez vous renoncer a cette tache ?')) {
        ok = false;
      }
    }

    if (ok) {
      this.up.task(+id, +choice).subscribe(
        (data) => {
          this.refresh();
        }
      );
    }
  }

  refresh() {
    this.read.tasks(this.idProject).subscribe(
      (data) => {
        this.tasks = data[0];
      }
    );
  }


  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private read: ReadService, private activateRoute: ActivatedRoute, config: NgbAccordionConfig, private up: UpdateService) {
    // console.log(this.activateRoute.routeConfig);
    config.closeOthers = true;
    this.idProject = this.activateRoute.parent.params._value.id;
    this.read.tasks(this.idProject).subscribe(
      (data) => {
        const tasks = data[0];
        const imagesTasks = data[1];
        for (let i = 0; i < tasks.length; i++) {
         const task = Object.assign(tasks[i], imagesTasks[i]);
         this.tasks.push(task);
        }
      }
    );
  }

  ngOnInit() {
  }

}
