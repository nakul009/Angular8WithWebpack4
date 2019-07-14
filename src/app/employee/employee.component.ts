import { Component } from '@angular/core';

@Component({
  selector: 'app-my-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})



export class EmployeeComponent {
  firstName: string = 'Tom';
  lastName: string = 'Green';
  gender: string = 'Male';
  age: number = 23;
  showDetail: boolean = false;

  onClick(): void {
    this.showDetail = !this.showDetail;
  }
}
