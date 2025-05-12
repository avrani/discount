import { Component, Input, inject, computed, effect } from '@angular/core';
import { Details } from '../../models';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Subject } from '../../models';
@Component({
  selector: 'app-details',
  imports: [FormsModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  dataService = inject(DataService);
  students = this.dataService.students;
  selectedSubject = this.dataService.selectedSubject;

  detailsData = computed(() => {
    const subject: Subject = this.selectedSubject();
    const students = this.students();
    const student = students.find(student => student.student_id === subject.student_id)
    return new Details(student, subject)
  })

}
