import { EmployeedetailsComponent } from '../employeedetails/employeedetails.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  id: number;
  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id:number) {
    this.employeeService.deleteEmployee(id).subscribe(
        data => {
          console.debug("deleted successfully");
          this.reloadData();
        },
        error => console.log("error")
    ) 
  }
  


  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}