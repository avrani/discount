import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-data-filter',
  imports: [FormsModule],
  templateUrl: './data-filter.component.html',
  styleUrl: './data-filter.component.scss'
})
export class DataFilterComponent {
  dataService = inject(DataService);
  subjects = this.dataService.subjects;
  selectedSubject = this.dataService.selectedSubject;
  userId: string = '';

  search(): void {
    const id = Number(this.userId);
    if (typeof id === 'number') {
      this.dataService.search(id);
    }else{
       this.dataService.search()
    }
  }

  add() {

  }

  remove() {
    this.subjects.update(subjects => {
      return subjects.filter(subject => subject.row_id !== this.selectedSubject().row_id);
    })
    this.selectedSubject.set({})
  }



}
