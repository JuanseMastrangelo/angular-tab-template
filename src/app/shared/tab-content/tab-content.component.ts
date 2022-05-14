import { Component, Input, ComponentFactoryResolver, ViewChild, OnInit } from '@angular/core';
import { ContentContainerDirective } from 'src/app/directives/content-container.directive';
import { Tab } from 'src/app/models/ITab.model';

export interface SkeletonComponent {
    tabData?: any;
    indexTab: any;
}

@Component({
    selector: 'app-tab-content',
    template: '<ng-template content-container></ng-template>'
})
export class TabContentComponent implements OnInit {
    @Input() tab: any;
    @ViewChild(ContentContainerDirective, { static: true })
    contentContainer: ContentContainerDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit() {
        const tab: Tab = this.tab;
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tab.component);
        const viewContainerRef = this.contentContainer.viewContainerRef;
        const componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as SkeletonComponent).tabData = tab.tabData;
        (componentRef.instance as SkeletonComponent).indexTab = tab.uuid;
    }
}
