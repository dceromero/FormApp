import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  url: string;
}
@Component({
  selector: 'shared-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent {
  public reactiveMenu: MenuItem[] = [
    {
      title: 'Basicos',
      url: './reactive/basicos',
    },
    {
      title: 'Dinamicos',
      url: './reactive/dinamyc',
    },
    {
      title: 'Switches',
      url: './reactive/switches',
    }
  ];

  public authMenu: MenuItem[] = [
    {
      title: 'Registro',
      url: './auth/register',
    },
  ];
}
