import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  path: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItem[] = [
    { text: 'Basics', path: './template/basics' },
    { text: 'Dinamics', path: './template/dinamics' },
    { text: 'Switches', path: './template/switches' },
  ];
  reactiveMenu: MenuItem[] = [
    { text: 'Basics', path: './reactive/basics' },
    { text: 'Dinamics', path: './reactive/dinamics' },
    { text: 'Switches', path: './reactive/switches' },
  ];

}
