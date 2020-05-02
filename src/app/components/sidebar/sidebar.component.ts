import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/art/list', title: 'Artes',  icon: 'ni-album-2 text-primary', class: '' },
    { path: '/company/list', title: 'Compañias',  icon:'ni-building text-orange', class: '' },
    { path: '/logoes/list', title: 'Logos',  icon:'ni-image text-blue', class: '' },
    { path: '/color/list', title: 'Colores',  icon:'ni-palette text-orange', class: '' },
    { path: '/rule/list', title: 'Reglas',  icon:'ni-collection text-blue', class: '' },
    { path: '/valueloge/list', title: 'Valor de logo',  icon:'ni-bullet-list-67 text-orange', class: '' },
    { path: '/garmentcolor/list', title: 'Colores de prenda',  icon:'ni-tie-bow text-blue', class: '' },
    { path: '/pet/list', title: 'Mascotas',  icon:'ni-satisfied text-orange', class: '' },
    { path: '/font/list', title: 'Fuentes',  icon:'ni-ruler-pencil text-blue', class: '' }, 
    { path: '/user/list', title: 'Usuarios',  icon:'ni-badge text-orange', class: '' },
    { path: '/usertype/list', title: 'Tipos de usuarios',  icon:'ni-badge text-blue', class: '' },
    { path: '', title: 'Cerrar Sesión',  icon:'ni-button-power text-orange', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
