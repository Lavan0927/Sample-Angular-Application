import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  newStudent: any = {}; 

  constructor(private studentService: StudentService,private router: Router) { }

  ngOnInit(): void {
  }

  createStudent(): void {
    if (this.newStudent.fname && this.newStudent.lname && this.newStudent.age && this.newStudent.email) {
      this.studentService.createStudent(this.newStudent)
        .subscribe(
          (response: any) => {
            console.log('Student created successfully:', response);
            this.router.navigate(['students']);
          },
          (error) => {
            console.error('Error creating student:', error);
          }
        );
    } else {
      console.error('Incomplete student data. Please fill in all required fields.');
    }
  }
}




