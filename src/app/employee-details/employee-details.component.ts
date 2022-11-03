import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }
  employeeDetails : any =[];
  ngOnInit(): void {
    this.employeeDetails = JSON.parse(localStorage.getItem("employeeList") || "[]");
    console.log('ss',this.employeeDetails)
  }
  getPhone(numbers:any){
    let a =[] =numbers
    // let a = Object.assign({}, ...numbers);
    // console.log('numbers',numbers,a.phone );
    let data = '';
    a.forEach((element:any,idx:number) => {
      if (idx === 0) {
        data += element.phone;
      } else {
        data += ' , ' + element.phone;
      }
    });
    return data;
  }
}
