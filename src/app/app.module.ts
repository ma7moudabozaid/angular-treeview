import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TahalufTreeviewModule } from 'projects/tahaluf-treeview/src/lib/tahaluf-treeview.module';
import { HomeComponent } from './home/home.component';
import { TahalufTreeview2Module } from 'projects/tahaluf-treeview2/src/lib/tahaluf-treeview2.module';
import { Tree1Component } from './tree1/tree1.component';
import { Tree2Component } from './tree2/tree2.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, Tree1Component, Tree2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TahalufTreeviewModule,
    TahalufTreeview2Module,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
