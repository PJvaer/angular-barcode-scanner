import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-barcode-scanner';
  public codes = [];
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      minHeight: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.codes.push(result);
    });
  }
}
