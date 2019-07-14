import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
