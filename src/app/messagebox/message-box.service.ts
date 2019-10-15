import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WarningBoxComponent } from './warning-box/warning-box.component';
import { ErrorBoxComponent } from './error-box/error-box.component';
import { YesOrNoComponent } from './yes-or-no/yes-or-no.component';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {


  constructor(public dialog: MatDialog) { }

  public warning(warningMessage: string): void {
    this.dialog.open(WarningBoxComponent, {
      data: {
        boxTitle: 'Warning!',
        errorMessage: warningMessage
      }
    });
  }

  public blank(fieldName: string): void {
    this.dialog.open(WarningBoxComponent, {
      data: {
        boxTitle: 'Warning!',
        errorMessage: fieldName + ' cannot be blank!'
      }
    });
  }

  public yesOrNo(title) {
    return this.dialog.open(YesOrNoComponent, {
      data: {
        title,
        message: 'Are You sure?'
      }
    });
  }

  public showError(error: string): void {
    this.dialog.open(ErrorBoxComponent, {
      data: {
        boxTitle: 'Error!',
        errorMessage: error
      }
    });
  }

  public showInfo(title: string, message: string): void {
    this.dialog.open(WarningBoxComponent, {
      data: {
        boxTitle: title,
        errorMessage: message
      }
    });
  }

}
