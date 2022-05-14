import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tabs-template';
  imageBackground = './assets/illustrations/laptop-2298286_1280.png';
  public onSideNavChange: boolean;

  constructor(
    public overlayContainer: OverlayContainer
  ) {

  }
  
  ngOnInit() {
    this.setTheme();
  }

  

    // Dark-ligth mode
    @HostBinding('class') componentCssClass;
    setTheme() {
        const theme = "dark-theme";
        this.overlayContainer.getContainerElement().classList.add(theme);
        this.componentCssClass = theme;
    }
}
