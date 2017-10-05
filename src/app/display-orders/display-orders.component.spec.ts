import { TestBed, async, fakeAsync, tick, ComponentFixture, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { DisplayOrdersComponent } from './display-orders.component';

import {NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BatterItemsService } from '../batter-items.service';
import { OrdersService } from '../orders.service';

describe('display-orders component', () => {
  let component: DisplayOrdersComponent;
  let fixture: ComponentFixture<DisplayOrdersComponent>;
  let batterservice : BatterItemsService;

  beforeEach(async(() => {
     TestBed.configureTestingModule({
      declarations: [DisplayOrdersComponent],
      imports: [HttpModule, NgbModule.forRoot()],
      providers: [BatterItemsService, OrdersService, NgbModal, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        } ]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayOrdersComponent);
    component = fixture.debugElement.componentInstance;
    component.item = 'Poori';

  }));

   describe('',()=>{
     const mockResponse = {
        batterItems: [
          { id: 0, name: 'Idly', price: 50, url: './assets/images/Idly.jpg', type: 'Batter' },
          { id: 1, name: 'Poori', price: 40, url: './assets/images/Poori.jpg', type: 'Flour' }
        ],
        OrderItems: [
          { id: 0, name: 'idly', date: { year: 2017, month: 7, day: 2 }, packets: 1, price: 50 }]
      };
    it('Testing', (inject([OrdersService, MockBackend], (orderservice, mockBackend) => {
     
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      console.log(component);
    })));

   });
});
