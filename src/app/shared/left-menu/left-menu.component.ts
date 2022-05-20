import { Component, OnInit, Input } from '@angular/core';
import { onSideNavChange, animateText } from 'src/app/animations/menu';




// Tab system
import { TabService } from 'src/app/services/tab.service';


@Component({
    selector: 'app-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.css'],
    animations: [onSideNavChange, animateText]
})
export class LeftMenuComponent implements OnInit {

    modulos = [];
    objectKeys = Object.keys;
    user = {
        UsuarioNombreCompleto: "Juan Mastrangelo",

    };
    userFoto = './assets/images/user-no-image.png';

    // Triggers
    permissionsCountChanges = 0;
    menuCountChanges = 0;
    permissionTrigger = null;
    menuTrigger = null;
    subscribeMenu = null;

    public sideNavState = false;
    public favorites = [];
    public linkText = false;


    constructor(
        private tabService: TabService,
    ) { }

    ngOnInit() {
        this.scrollbar();
        this.loadMenu();
    }


    onSinenavToggle(value?) {
        console.log(value);
        this.sideNavState = value || !this.sideNavState;
        if (!this.sideNavState) { (<any>$('.collapse')).collapse('hide'); }
        this.linkText = this.sideNavState;
    }

    private scrollbar() {
        // Si no es un webkit browser
        (() => {
            const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
            const isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
            if (isChrome || isSafari) {
                const scrollbarDiv = document.querySelector('.scrollbar');
            }
        })();
    }

    public loadMenu() {
        this.modulos = [
            {
                Nombre: 'Dashboard',
                Accion: 'dashboard',
                Icono: 'fa-home'
            },
            {
                Nombre: 'Menu with child #1',
                Icono: 'fa-list-ul',
                Submenus: [
                    {
                        Nombre: 'Child #1',
                        Accion: 'dashboard'
                    },
                    {
                        Nombre: 'Child #2',
                        Accion: 'dashboard'
                    }
                ]
            },
            {
                Nombre: 'Menu with child #2',
                Icono: 'fa-history',
                Submenus: [
                    {
                        Nombre: 'Child #1',
                        Accion: 'dashboard'
                    },
                    {
                        Nombre: 'Child #2',
                        Accion: 'dashboard'
                    }
                ]
            }
        ]
    }

    /**
     * Abre una nueva pestaña con el componente seleccionado
     * @param name Nombre del parametro de referencia en el componente
     * @param path Ruta necesaria para el decorador @ComponentLookup
     */
    public addNewTab(name: string, path: string) {
        this.tabService.addNewTab(name, path);
    }
}


@Component({
    selector: 'app-side-submenu',
    templateUrl: './left-submenu.component.html',
    styleUrls: ['./side-submenu.component.css']
})

export class LeftSubMenuComponent implements OnInit {

    @Input() Submenus: any[];
    @Input() Contador: number;
    @Input() PaddingLeft: number;

    constructor(private tabService: TabService) { }

    ngOnInit() {
        this.Contador++;
        this.PaddingLeft = this.PaddingLeft + 5;
    }

    getPaddingLeft(): any {
        return {
            'padding-left': this.PaddingLeft + 'px'
        };
    }


    openTab(url: string) {
        window.open(window.location.protocol + '//' + window.location.host + '/' + url, '_blank');
    }

    /**
     * Método que devuelve una cadena de caracteres sin espacios
     * @param nombre string
     */
    nombreReferencia(nombre: string) {
        return nombre.replace(/[. \n]/g, '');
    }

    /**
     * Abre una nueva pestaña con el componente seleccionado
     * @param name Nombre del parametro de referencia en el componente
     * @param path Ruta necesaria para el decorador @ComponentLookup
     */
    addNewTab(name: string, path: string) {
        this.tabService.addNewTab(name, path);
    }


}
