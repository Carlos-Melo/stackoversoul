import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ListFeedComponent } from './components/list-feed/list-feed.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListFeedComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
