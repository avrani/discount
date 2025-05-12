import { Injectable } from '@angular/core';
import { mockSubjects, mockStudents } from '../data';
import { of, forkJoin, Observable, map } from 'rxjs';
import { Student, Subject, StudentIdToName } from '../models';
@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private students$: Observable<Student[]> = of(mockStudents);
  private subjects$: Observable<Subject[]> = of(mockSubjects);

  getData() {
    return forkJoin([this.students$, this.subjects$]).pipe(
      map(([students, subjects]) => {
        const studentIdToName: StudentIdToName = {}
        students.forEach(student => {
          studentIdToName[student.student_id] = student.name;
        })
        subjects = subjects.map(subject => {
          subject.student_name = studentIdToName[subject.student_id];
          subject.selected = false;
          return subject;
        })
        return { students, subjects }; 
      }))
  }
}