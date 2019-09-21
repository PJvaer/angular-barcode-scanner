import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  found: boolean;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSucces(event) {
    console.log(event);
  }

  public test() {
    this.found = true;
  }

  public scanSuccessHandler($event) {
    alert($event);
  }
  public scanErrorHandler($event) {
    alert($event);
  }

  public scanFailureHandler($event) {
    alert($event);
  }
  public scanCompleteHandler($event) {
    alert($event);
  }
}
