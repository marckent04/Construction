import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DeleteService } from 'src/app/services/delete/delete.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReadService } from 'src/app/services/read/read.service';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() nom: string;
  @Input() location: string;
  @Input() img: string;
  @Input() id: number;
  @Input() status: number;

  delete = false;

  lstatus: number;
  lok = 0;

  

  removeProject(id: number) {
    if (confirm('Vous etes sur le point de supprimer votre projet')) {
      if (confirm('Etes-vous sur de vouloir supprimer votre projet ? cette action est irreversible')) {
        this.spinner.show();
        this.remove.project(+id).subscribe(
          (data) => {
            this.spinner.hide();
            if (data) {
              this.delete = true;
            }
          }
        )
      }
    }
  }

  finished(id: number) {
    if (confirm('Vous confirmez que ce projet est bel et bien termine ?')) {
      this.update.projectStatut(id).subscribe(
        (data) => {
          if (data) {
            this.lstatus = 1;
            this.lok = 1;
          }
        }
      )
    }
  }

  finishedProject(id: number) {
    
  }
  constructor(private remove: DeleteService, private spinner: NgxSpinnerService, private update: UpdateService) {}

  ngOnInit() {
  }


}
