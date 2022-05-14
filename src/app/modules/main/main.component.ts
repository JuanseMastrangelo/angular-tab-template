import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/models/ITab.model';
import { TabService } from 'src/app/service/tab.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // Tab
  tabs = new Array<Tab>(); // Estado al comienzo de la app
  tabsRealTimeState = new Array<any>(); // Estado en tiempo real de la app
  selectedTab: number;

  constructor(
    private tabService: TabService,
  ) { }

  ngOnInit(): void {
    this.tabService.tabSub.subscribe(tabs => {
        this.tabs = tabs;
        this.selectedTab = tabs.findIndex(tab => tab.active);
    });
  }

  removeTab(index: number, uuid: string) {
    this.tabService.removeTab(index, uuid);
  }
}
