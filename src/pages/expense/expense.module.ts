import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpensePage } from './expense';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    ExpensePage,
  ],
  imports: [
    IonicPageModule.forChild(ExpensePage),
    NgxDatatableModule
  ],
})
export class ExpensePageModule {}
