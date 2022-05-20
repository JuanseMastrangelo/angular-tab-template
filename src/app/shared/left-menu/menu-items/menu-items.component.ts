import { Component, OnInit, Input, ViewChild } from '@angular/core';

// Tab system
import { TabService } from 'src/app/services/tab.service';
import { ComponentLookupRegistry } from 'src/app/decorators/components.decorators';
import { Tab } from 'src/app/models/ITab.model';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-items.component.html'
})
export class MenuItemsComponent implements OnInit {
    @Input() items;
    @ViewChild('childMenu', { static: false }) public childMenu;
    constructor(private tabService: TabService) { }

    ngOnInit() {
    }

    /**
     * Abre una nueva pestaña con el componente seleccionado
     * @param name Nombre del parametro de referencia en el componente
     */
    addNewTab(name: string, path: string) {
        this.tabService.addTab(
            new Tab(ComponentLookupRegistry.get(name), name, { parent: 'AppComponent', path })
        );
    }
}
