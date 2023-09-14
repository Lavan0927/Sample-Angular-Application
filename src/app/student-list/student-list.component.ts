import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudentList();
  }

  getStudentList(): void {
    this.studentService.getStudentList()
      .subscribe(
        (data: any[]) => {
          this.students = data;
          console.log(data);
        },
        (error) => {
          console.error('Error fetching student list:', error);
        }
      );
  }

  deleteStudent(id: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id)
        .subscribe(
          () => {
            // Remove the deleted student from the local array
            this.students = this.students.filter(student => student.id !== id);
          },
          (error) => {
            console.error('Error deleting student:', error);
          }
        );
    }
  }
}
