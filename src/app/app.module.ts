import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {RouterModule} from '@angular/router';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService }  from './data.service'


import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NdbDateComponent } from './display-orders/date.component';
import { SummaryComponent } from './summary/summary.component';
import { MenuComponent } from './home/home.component';
import {OrdersService} from './orders.service';
import { OrderClass } from './orderClass.component';
import { DisplayOrdersComponent } from './display-orders/display-orders.component';
import { OrderedOrdersComponent } from './ordered-orders/ordered-orders.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleMenuComponent } from './toggle-menu/toggle-menu.component';


@NgModule({
  declarations: [AppComponent, MenuComponent, NdbDateComponent, SummaryComponent,
                 OrderClass, DisplayOrdersComponent, OrderedOrdersComponent, ToggleMenuComponent],
  imports: [BrowserModule, FormsModule, NgbModule.forRoot(), HttpModule, BrowserAnimationsModule, 
          InMemoryWebApiModule.forRoot(DataService),
          RouterModule.forRoot([
          {
            path:'',
            redirectTo : 'NavTabs',
            pathMatch : 'full'
          },
          {
            path:'NavTabs',
            component : MenuComponent
          },
          {
            path:'summary',
            component: SummaryComponent
          },
          {
            path:'ordered',
            component: OrderedOrdersComponent
          }
        ])],
  providers: [OrdersService],
  bootstrap: [AppComponent],
  entryComponents: [NdbDateComponent]
})
export class AppModule { }
