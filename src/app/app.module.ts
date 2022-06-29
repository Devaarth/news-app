import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar/search-bar.component';
import { VideoCardComponent } from './components/video-card/video-card/video-card.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
@NgModule({
  declarations: [AppComponent, SearchBarComponent, VideoCardComponent, NewsCardComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, BrowserAnimationsModule],
  providers: [],
  exports :[MatCardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
