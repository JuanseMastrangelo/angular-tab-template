import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ContentContainerDirective } from './directives/content-container.directive';
import { TabService } from './service/tab.service';
import { TabContentComponent } from './shared/tab-content/tab-content.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './modules/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    TabContentComponent,
    ContentContainerDirective,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
