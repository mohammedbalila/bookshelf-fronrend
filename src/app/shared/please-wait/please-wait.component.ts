import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef } from '@angular/material';
import { UIService } from '../UI.service';

@Component({
  selector: 'app-please-wait',
  templateUrl: './please-wait.component.html',
  styleUrls: ['./please-wait.component.scss']
})
export class PleaseWaitComponent implements OnInit {

  isLoading = false;
  private loadingSubs: Subscription;

  constructor(
    private dialogRef: MatDialogRef<PleaseWaitComponent>,
    private uiService: UIService
  ) { }

  ngOnInit() {
    this.dialogRef.disableClose = true;
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      console.log(true);
      if ( isLoading !== true ) {
        this.dialogRef.close();
      }
    });
  }

}
