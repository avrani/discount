import { computed, Injectable, Signal, effect, signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Student, Subject, StudentIdToName } from '../models';

import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  restApiService = inject(RestApiService);
  students = signal<Student[]>([])
  subjects = signal<Subject[]>([])
  subjectStorage = <Subject[]>([])
  selectedSubject = signal<any>('');

  search(userId?: number) {
    if (!userId) {
      this.subjects.set(this.subjectStorage);
      return;
    }
    let subjects = this.subjects();
    subjects = this.subjectStorage.filter(sub => sub.student_id === userId);
    this.subjects.set(subjects);
  }

  getData() {
    this.restApiService.getData().subscribe(({ students, subjects }) => {
      this.students.set(students);
      this.subjectStorage = subjects;
      this.subjects.set(subjects);
    });
  }

  removeRow(id: number): void {

  }

  addStudent(): void {

  }

  getSubjectByRowId(id: number) {

  }

  getStudentByStudentId(id: number) {

  }
}
