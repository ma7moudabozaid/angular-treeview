import { NgModule } from '@angular/core';
import { TahalufTreeview2Component } from './tahaluf-treeview2.component';
import { TahTreeitemComponent } from './components/tah-treeitem/tah-treeitem.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TahalufTreeview2Component, TahTreeitemComponent],
  imports: [CommonModule],
  exports: [TahalufTreeview2Component, TahTreeitemComponent],
})
export class TahalufTreeview2Module {}
