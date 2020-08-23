import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //private baseUrl = "http://localhost:8082/api/employees";
    
  constructor(private http: HttpClient) { }
     
    getEmployeesList():Observable<any>{
    return this.http.get("http://localhost:8083/api/employees");
  }
  getEmployee(id: number): Observable<any> {
     return this.http.get("http://localhost:8083/api/employees/" +id);
    }
  
  createEmployee(employee: Object): Observable<Object> {
    return this.http.post("http://localhost:8083/api/employees", employee);
  }
  updateEmployee(employee: Object): Observable<Object> { 
    return this.http.post("http://localhost:8083/api/employees",employee);
  }
  

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8083/api/employees/" +id);
   }

  
}

