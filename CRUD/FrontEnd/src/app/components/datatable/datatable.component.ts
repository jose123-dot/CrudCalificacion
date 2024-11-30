import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import { CamelCaseToSpacePipe } from '../../pipes/camelCaseToSpace.pipe';
import { ModalComponent } from '../modal/modal.component';
import { IDatatableIconColumn } from '../../Interfaces/IDatatableIconColumn';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  
  
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.css',
})
export class DatatableComponent {

  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() view = new EventEmitter();
  
  @Output() iconColumDescriptor = new EventEmitter();

  @Input() viewData: boolean = false;

  @Input() editData: boolean = false;
  @Input() deleteData: boolean = false;

  @Input() titleModal: string = '';

  @Input() iconColumns!:  { [key: string]: IDatatableIconColumn[] };


   @Input()
   data!:any[] 
   @Input() columns: string[] = [];
   @Input() isActiveAccions:boolean = false
  

  pageSize = 10;
  pageSizes = [10, 15, 25];
  pageNumber = 1;
  maxPageNumbersToShow = 10;


  changePage(event: number) {
    this.pageNumber = event;
  }

  transform(value: string): string {
    return value.replace(/([A-Z])/g, ' $1').trim();
  }

  changePageSize(size: number) {
    this.pageSize = size;
    this.pageNumber = 1;
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  onDelete(item: any) {
    console.log('Delete', item);
    this.delete.emit(item);
  }

  onEdit(item: any) {
    console.log('Edit', item);
    console.log(this.data, this.columns)
    this.edit.emit(item);
  }

  onView(item: any, description: any) {
    console.log('View', item);
    console.log('Description', description);
    this.view.emit(item);    
    const descripcion = {
      icon: description[0].icon,
      path: description[0].path + item._id
    }
    console.log('Description', descripcion);
    this.iconColumDescriptor.emit(descripcion);
  }

}
