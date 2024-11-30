import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatSlideToggleModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  isDarkMode: boolean = false;
  constructor(private router: Router) {}
  public ItemsMenu = [
    {
      name: 'Panel',
      icon: 'ri-layout-4-line mr-3 text-xl ',
      path: '/dashboard',
    },

    {
      name: 'estudiantes',
      icon: 'ri-wallet-line mr-3 text-xl ',
      path: '/estudiante',
    },
    {
      name: 'Asignaturas',
      icon: 'ri-wallet-line mr-3 text-xl ',
      path: '/asignatura',
    },
    {
      name: 'Maestro',
      icon: 'ri-wallet-line mr-3 text-xl ',
      path: '/maestro',
    },
    {
      name: 'Reportes',
      icon: 'ri-wallet-line mr-3 text-xl ',
      path: '/propiedades',
      children: [
        {
          name: 'Calificaciones',
          icon: 'ri-car-line mr-3 ',
          path: '/calificacionS',
        },

        {
          name: 'Asistencia',
          icon: 'ri-police-car-fill mr-3 text-lg ',
          path: '/asistenia',
        },
      ],
    },
  ];

  isActiveMenu: string = '';

  isSidebarOpen: boolean = true;
  isOpenDropdown: any = {};
  isOpenDropdown2: any = false;

  toggleDropdown(index: any) {
    console.log('Me ejecute');

    this.isOpenDropdown2 = true;
    console.log('Cambie de valor');
    this.isOpenDropdown[index] = !this.isOpenDropdown[index];
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = !this.isDarkMode;
  }
}
