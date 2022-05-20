import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



// Service
import { TabService } from 'src/app/services/tab.service';


const menu = [
    {
        Nombre: 'Text',
        Accion: '/text',
        Submenus: []
    }
]


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    fastSearch = '';

    constructor(
        private tabService: TabService
        ) { }

    time = new Date();
    version: number;
    menuOptions = [];
    filteredMenuOptions = [];

    ngOnInit() {
        this.version = environment.version;
        setInterval(() => {
            this.time = new Date();
        }, 60000);
        this.getMenuOptions();
    }

    getMenuOptions() {
        this.menuOptions = [];
        menu.forEach(parentMenu => {
            (parentMenu.Submenus).forEach(submenu => {
                if (submenu.Submenus) {
                    (submenu.Submenus).forEach(subsubmenu => {
                        this.menuOptions.push(subsubmenu);
                    })
                } else {
                    this.menuOptions.push(submenu);
                }
            });
        });
    }

    filterFastSearch($event) {
        const filterValue = ($event.target.value).toLowerCase();
        if (filterValue !== '') {
            this.filteredMenuOptions = this.menuOptions.filter(option => option.Accion ? ((option.Accion).toLowerCase().indexOf(filterValue) >= 0) : null);
        } else {
            this.filteredMenuOptions = this.menuOptions;
        }
    }


    openTab() {
        if (this.fastSearch.split('#').length > 1) {
            const nameAndPath = this.fastSearch.split('#');
            this.tabService.addNewTab(nameAndPath[0], nameAndPath[1]);
            this.fastSearch = '';
        }
    }
}
