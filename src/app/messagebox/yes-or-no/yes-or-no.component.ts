import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-yes-or-no',
  templateUrl: './yes-or-no.component.html',
  styleUrls: ['./yes-or-no.component.scss']
})
export class YesOrNoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<YesOrNoComponent>) { }
  ngOnInit() {
  }

  onClose(bool: number) {
    if (bool === 1) {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(false);
    }
  }
}
