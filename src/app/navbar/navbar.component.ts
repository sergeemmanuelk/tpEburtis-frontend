import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
    items!: MenuItem[];

    ngOnInit() { 
        this.items = [
            {
                label: 'Accueil',
                icon: 'pi pi-fw pi-home',
                //routerLink: '/acceuil'
            },
            {
                label: 'Personne',
                icon: 'pi pi-fw pi-users',
                routerLink: '/person'
            }
        ]
    }
}