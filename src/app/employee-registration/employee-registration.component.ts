import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,FormArray  } from '@angular/forms';
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,) { this.registrationForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    dob:['', Validators.required],
    role: ['', Validators.required],
    phone: this.formBuilder.array([]),
    gender: ['', Validators.required],
   }); }
  registrationForm :any = FormGroup;
  role =["Admin","Manager","HR","Developer"]
  loading :boolean = false
  ngOnInit(): void {
    
  }
  addNewPhoneNum() {
    let add = this.registrationForm.get('phone') as FormArray;
    add.push(this.formBuilder.group({
      phone: []
  
    }))
  };
  deleteNum(index: number) {
    let add = this.registrationForm.get('phone') as FormArray;
    add.removeAt(index)
  };
  goTo(id:number){
    if(id === 1){
      this.loading = true;
    }else{
      this.loading = false;
    }
    
  };
  
  registr(){
    console.log('form', this.registrationForm.value);
    var a = []
   a =  JSON.parse(localStorage.getItem("employeeList") || "[]");
  a.push(this.registrationForm.value);
  localStorage.setItem("employeeList", JSON.stringify(a));
  // this.employeeDetails = JSON.parse(localStorage.getItem("employeeList") || "[]");
  console.log('here',);
  this.registrationForm.reset(this.registrationForm.value={phone: this.formBuilder.array([])});
  // localStorage.removeItem("employeeList");
  }
}
