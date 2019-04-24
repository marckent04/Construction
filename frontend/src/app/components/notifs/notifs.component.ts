import { Component, OnInit } from '@angular/core';
import { ReadService } from 'src/app/services/read/read.service';
import { DeleteService } from 'src/app/services/delete/delete.service';
import { Router } from '@angular/router';
import { UpdateService } from 'src/app/services/update/update.service';

@Component({
  selector: 'app-notifs',
  templateUrl: './notifs.component.html',
  styleUrls: ['./notifs.component.css']
})
export class NotifsComponent implements OnInit {

  invitations: any;
  refresh(id: number) {
    this.read.notifications(+localStorage.getItem('id')).subscribe(
      (data) => {
        this.invitations = data;
      }
    );
  }
  constructor(private remove: DeleteService , private read: ReadService, private router: Router, private update: UpdateService) {

    this.read.notifications(+localStorage.getItem('id')).subscribe(
      (data) => {
        this.invitations = data;
      }
    );
  }

  choix(id, choice) {
    if (choice == 0) {
      if (confirm('Etes vous sur de vouloir supprimer cette demande')) {
        this.remove.invitation(id).subscribe(
          (data) => {
            if (data) {
              this.refresh(+localStorage.getItem('id'));
            }
          }
        )
      }
    } else {

    this.update.invitation(+id).subscribe(
        (data: Data) => {
          if (data.invitation && data.project) {
            this.router.navigate(['/welcome', {outlets: { options: 'projects'}}]);
          } else {
            alert('une erreur a ete rencontree');
          }
        }
    );
    }
  }
  ngOnInit() {
  }

}
