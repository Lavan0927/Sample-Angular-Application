import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  student: any = {}; 
  studentId: number;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentId = 0;
  }

  ngOnInit(): void {
    this.studentId = +this.route.snapshot.paramMap.get('id')!;
    this.getStudentById(this.studentId);
  }

  getStudentById(id: number): void {
    this.studentService.getStudentById(id)
      .subscribe(
        (data: any) => {
          this.student = data;
        },
        (error: any) => {
          console.error('Error fetching student details:', error);
        }
      );
  }

}
