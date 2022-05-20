import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentContainerDirective } from './directives/content-container.directive';
import { TabService } from './services/tab.service';
import { TabContentComponent } from './shared/tab-content/tab-content.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './modules/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule } from '@angular/forms';
import { LeftMenuComponent, LeftSubMenuComponent } from './shared/left-menu/left-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    HeaderComponent,
    LeftMenuComponent,
    LeftSubMenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
