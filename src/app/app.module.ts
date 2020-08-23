import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import {FormsModule} from '@angular/forms';    
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreateemployeeComponent,
    EmployeedetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
