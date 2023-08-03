import { Component, Input } from '@angular/core';
import { TREEVIEW } from '../models/model';

@Component({
  selector: 'app-tree2',
  templateUrl: './tree2.component.html',
  styleUrls: ['./tree2.component.scss'],
})
export class Tree2Component {
  @Input() items = TREEVIEW;
}
