import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Tree } from 'src/app/models/tree';
@Component({
  selector: 'lib-tahalufTreeview2',
  templateUrl: './tahaluf-treeview2.component.html',
  styleUrls: ['./tahaluf-treeview2.component.scss'],
})
export class TahalufTreeview2Component {
  @Input() items: any[] = [];
  @Input() default: Boolean = true;
  @Input() ind: any;
  @Input() first: any;
  @Input() last: any;

  @Input() parentTemplate!: TemplateRef<any>;

  @Output() expandTree = new EventEmitter<number>();
  @ContentChild('newTemplate') newTemplateRef!: TemplateRef<any>;
  constructor() {}

  ngOnInit(): void {}

  // expand(item: any) {
  //   item.isExpand = !item.isExpand;
  //   console.log(item.id);
  // }
}
