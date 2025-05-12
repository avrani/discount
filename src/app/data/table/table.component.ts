import { Component, effect, inject, Input, Output, EventEmitter, computed } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { Student, Subject, StudentIdToName } from '../../models';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  dataService = inject(DataService);
  subjects = this.dataService.subjects;
  selectedSubject = this.dataService.selectedSubject;

  onSelect(subject: Subject) {
    this.unSelecteAll()
    subject.selected = true;
    this.selectedSubject.set(subject);
  }

  unSelecteAll() {
    this.subjects.update((subjects: Subject[]) => {
      subjects.forEach(subject => {
        subject.selected = false;
      })
      return subjects;
    });

  }
}
