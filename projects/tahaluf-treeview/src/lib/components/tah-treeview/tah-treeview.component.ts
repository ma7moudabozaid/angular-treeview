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
  selector: 'lib-tah-treeview',
  templateUrl: './tah-treeview.component.html',
  styleUrls: ['./tah-treeview.component.scss'],
})
export class TahTreeviewComponent {
  @Input() items: Tree[] = [];
  @Input() default: Boolean = true;
  @Input() ind: any;
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
