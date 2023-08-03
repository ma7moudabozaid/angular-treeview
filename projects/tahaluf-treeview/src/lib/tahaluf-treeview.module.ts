import { NgModule } from '@angular/core';
import { TahalufTreeviewComponent } from './tahaluf-treeview.component';
import { TahTreeviewComponent } from './components/tah-treeview/tah-treeview.component';
import { TahTreeitemComponent } from './components/tah-treeitem/tah-treeitem.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TahalufTreeviewComponent,
    TahTreeviewComponent,
    TahTreeitemComponent,
  ],
  imports: [CommonModule],
  exports: [
    TahalufTreeviewComponent,
    TahTreeviewComponent,
    TahTreeitemComponent,
  ],
})
export class TahalufTreeviewModule {}
