import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


// Tab system
import { Tab } from 'src/app/models/ITab.model';
import { ComponentLookupRegistry } from 'src/app/decorators/components.decorators';
import { componentOpenOneTime } from 'src/app/componentOpenOneTime';

@Injectable()
export class TabService {
    public tabs: Tab[] = [];

    public tabSub = new BehaviorSubject<Tab[]>(this.tabs);

    constructor() {}



    public removeTab(index: number, uuid: string) {
        this.tabs.splice(index, 1);
        if (this.tabs.length > 0) {
            if (this.tabs.length === 1) {
                this.tabs[0].active = true;
            } else {
                // this.tabs[index].active = true;
            }
        }
    }

    public addTab(tab: Tab, dataTab?: any, uuid?: string) {
        for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i].active === true) {
                this.tabs[i].active = false;
            }
        }
        tab.id = this.tabs.length + 1;
        tab.uuid = uuid || Math.random().toString(36).substring(7);
        dataTab && (tab.tabData = dataTab);
        tab.active = true;
        this.tabs.push(tab);
        this.tabSub.next(this.tabs);
        console.log(this.tabs);
    }


    resetTabs() {
        this.tabs = [];
        this.tabSub = new BehaviorSubject<Tab[]>(this.tabs);
    }






    /**
     * Abre una nueva pestaña con el componente seleccionado
     * @param name Nombre del parametro de referencia en el componente
     * @param path Ruta necesaria para el decorador @ComponentLookup
     */
    addNewTab(name: string, path: string, data?: object, uuid?: string) {
        console.log(name, path);
        const getComponentsFromList = componentOpenOneTime.filter((tab: any) => tab.name === name);
        let dataObject = { parent: 'AppComponent', path };
        if (data) { dataObject = Object.assign({}, dataObject, data); }
        const countOpen = this.tabs.filter((tab: any) => tab.component === name);
        if (getComponentsFromList.length === 0) { // Si no aparece en la lista de componentes
            if (countOpen.length >= 1) {
                this.tabs.map(tab => {
                    if (tab.uuid === countOpen[0].uuid) {
                        tab.active = true;
                        const indexTab = this.tabs.indexOf(tab);
                        const quickFilter = document.getElementsByClassName('mat-tab-label')[indexTab] as HTMLInputElement;
                        quickFilter.click();
                    }
                });
            } else {
                this.addTab(
                    new Tab(ComponentLookupRegistry.get(path), name, dataObject), null, uuid
                );
            }

        } else { // Si aparece en la lista es que tiene restricciones
            if ((countOpen.length < getComponentsFromList[0].count)) {
                this.addTab(
                    new Tab(ComponentLookupRegistry.get(path), name, dataObject), null, uuid
                );
            } else {
                // this.toast.warning('Pestañas', `Solo puedes tener ${getComponentsFromList[0].count} abierta`);
                this.tabs.map(tab => {
                    if (tab.uuid === countOpen[0].uuid) {
                        tab.active = true;
                        const indexTab = this.tabs.indexOf(tab);
                        const quickFilter = document.getElementsByClassName('mat-tab-label')[indexTab] as HTMLInputElement;
                        quickFilter.click();
                    }
                });
            }
        }
    }
}
