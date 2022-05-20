import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { onMainContentChange } from './animations/menu';
import { TabService } from './services/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [onMainContentChange]
})
export class AppComponent implements OnInit {
    title = 'angular-tabs-template';
    imageBackground = './assets/illustrations/laptop-2298286_1280.png';
    public onSideNavChange: boolean;
    tabs = 0;

    constructor(
      public overlayContainer: OverlayContainer,
      private tabService: TabService,
    ) {}
  
    ngOnInit() {
      this.setTheme();
      this.tabService.tabSub.subscribe(tabs => {
          this.tabs = tabs.length;
      });
    }

  

    // Dark-ligth mode
    @HostBinding('class') componentCssClass;
    setTheme() {
        const theme = "dark-theme";
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }
}
