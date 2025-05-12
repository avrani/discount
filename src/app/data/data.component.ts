import { Component, inject, Input } from '@angular/core';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';
import { DataFilterComponent } from './data-filter/data-filter.component';
import { DataService } from '../services/data.service';
import { Student, Subject, Details } from '../models';
@Component({
  selector: 'app-data',
  imports: [TableComponent, DataFilterComponent, DetailsComponent],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent {

  detailsData: any;
  dataService = inject(DataService);
  subjects = this.dataService.subjects;

  ngOnInit():void{
    this.dataService.getData()
  }
  onAction(action: string): void {
    /*   if (this.detailsData?.row_id && action === 'remove') {
        this.dataService.removeRow(this.detailsData?.row_id);
        this.data = this.dataService.getData();
      } */
  }

  onSearch(id: number) {
    /* if (id === 0) {
      this.data = this.dataService.getData();
    } else {
      this.data = this.dataService.getFilteredData(id);
    } */
  }

  onSelect(rowId: number) {
    /*  console.log('rowId', rowId);
 
     const subject = this.dataService.getSubjectByRowId(rowId);
     if (subject) {
       const student = this.dataService.getStudentByStudentId(subject.student_id);
       if (student) {
         this.detailsData = new Details(student, subject);
       }
     } */
  }
}
