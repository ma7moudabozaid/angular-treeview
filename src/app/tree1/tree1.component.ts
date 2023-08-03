import { Component, Input } from '@angular/core';
import { Tree } from 'src/app/models/tree';

@Component({
  selector: 'app-tree1',
  templateUrl: './tree1.component.html',
  styleUrls: ['./tree1.component.scss'],
})
export class Tree1Component {
  @Input() items: Tree[] = [];

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        name: 'Level A',
        isExpand: false,
        children: [
          {
            id: 1,
            name: 'Level A1',
            isExpand: false,

            children: [
              {
                id: 1,
                name: 'Level A11',
                isExpand: false,

                children: [
                  {
                    id: 1,
                    name: 'Level K',
                    isExpand: false,
                    children: [
                      {
                        id: 1,
                        name: 'Level K2',
                        isExpand: false,
                        children: [
                          { id: 1, name: 'Level K1', isExpand: false },
                        ],
                      },
                    ],
                  },
                  { id: 2, name: 'Level Y', isExpand: false },
                ],
              },
              {
                id: 2,
                name: 'LevelC',
                isExpand: false,
                children: [
                  {
                    id: 1,
                    name: 'Level R',
                    isExpand: false,
                    children: [{ id: 1, name: 'Level H', isExpand: false }],
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: 'Level A2',
            isExpand: false,
            children: [
              {
                id: 1,
                name: 'Level',
                isExpand: false,
                children: [
                  { id: 1, name: 'Level', isExpand: false },
                  { id: 1, name: 'Level', isExpand: false },
                ],
              },
              { id: 1, name: 'Level', isExpand: false },
              {
                id: 1,
                name: 'Level',
                isExpand: false,
                children: [
                  { id: 1, name: 'Level', isExpand: false },
                  { id: 1, name: 'Level', isExpand: false },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Level B',
        isExpand: false,
        children: [
          {
            id: 1,
            name: 'Level B1',
            isExpand: false,
            children: [
              {
                id: 1,
                name: 'Level BT',
                isExpand: false,
                children: [{ id: 1, name: 'Level', isExpand: false }],
              },
              {
                id: 1,
                name: 'Level O',
                isExpand: false,
                children: [{ id: 1, name: 'Level', isExpand: false }],
              },
            ],
          },
          {
            id: 1,
            name: 'Level P',
            isExpand: false,
            children: [
              {
                id: 1,
                name: 'Level Z',
                isExpand: false,
                children: [{ id: 1, name: 'Level S', isExpand: false }],
              },

              {
                id: 2,
                name: 'Level BN',
                isExpand: false,
                children: [
                  { id: 1, name: 'Level D', isExpand: false },
                  { id: 2, name: 'Level F', isExpand: false },
                ],
              },
            ],
          },
        ],
      },
    ];
  }
}
