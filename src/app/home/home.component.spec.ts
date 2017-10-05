import { TestBed, async, fakeAsync, tick, ComponentFixture, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { MenuComponent } from './home.component';
import { DisplayOrdersComponent } from '../display-orders/display-orders.component';

import { BatterItemsService } from '../batter-items.service';

import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let service : BatterItemsService;
 // let batterItems : Observable<any>;
  beforeEach(async() => {

     TestBed.configureTestingModule({
      declarations: [MenuComponent, DisplayOrdersComponent],
      imports: [HttpModule],
      providers: [BatterItemsService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        } ],
        // Not to conider the ngb-tab elements added this schema
      schemas : [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.debugElement.componentInstance;
   
  });
  describe('displaying Batter items ',()=>{
    const mockResponse = {
        batterItems: [
          { id: 0, name: 'Idly', price: 50, url: './assets/images/Idly.jpg', type: 'Batter' },
          { id: 1, name: 'Poori', price: 40, url: './assets/images/Poori.jpg', type: 'Flour' }
        ],
        OrderItems: [
          { id: 0, name: 'idly', date: { year: 2017, month: 7, day: 2 }, packets: 1, price: 50 }]
      };
    it('Testing', (inject([BatterItemsService, MockBackend], (orderservice, mockBackend) => {
     
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      console.log(component);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      //other component in Menu Comp
      //expect(compiled.querySelector('app-display-orders')).not.toBe(null);
    })));
  })
});
