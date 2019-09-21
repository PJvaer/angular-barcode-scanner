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
  MatRippleModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    AppComponent
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
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
