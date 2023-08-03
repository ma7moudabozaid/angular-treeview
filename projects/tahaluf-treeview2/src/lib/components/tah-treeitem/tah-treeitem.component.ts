import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'lib-tah-treeitem',
  templateUrl: './tah-treeitem.component.html',
  styleUrls: ['./tah-treeitem.component.scss'],
})
export class TahTreeitemComponent {
  @Input() item: any;
  @Input() ind: any;
  @Input() first: any;
  @Input() last: any;
  @Input() items: any;
  @Input() itemTemplate!: TemplateRef<any>;

  expand(item: any) {
    console.log('eeeeexx');
    item.isExpand = !item.isExpand;
  }
}
