import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatRippleModule,
  MatDialogModule,
  MatSelectModule,
  MatOptionModule,
  MatFormField,
  MatFormFieldModule,

} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalComponent } from './components/modal/modal.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';




@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatRippleModule,
    MatDialogModule,
    ZXingScannerModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
  ],
  providers: [],
  entryComponents: [
    ModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
