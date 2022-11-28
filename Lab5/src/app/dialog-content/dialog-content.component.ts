import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from '../models/Users';


@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {
  user:Users;
  index:number = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data:Users,
    private Ref:MatDialogRef<DialogContentComponent>
    ) {
    this.user = data;
  }

  ngOnInit(): void {
  }

  addToFavourites() {
   this.Ref.close(this.user)
  }
  close(){
    this.Ref.close()
  }
}
