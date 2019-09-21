import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  public found: boolean;
  public showSettings: boolean;
  public selected: any;
  public cameras: any[];
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public setCameras(event) {
    this.found = true;
    this.cameras = event;
    console.log(event)
    this.selected = this.cameras[0].deviceId;
  }

  public scanSuccessHandler(barcode) {
    this.dialogRef.close(barcode);
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
