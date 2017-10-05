import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { OrderedOrdersComponent } from './ordered-orders.component';

import { OrdersService } from '../orders.service';

describe('OrderedOrdersComponent', () => {
  let component: OrderedOrdersComponent;
  let fixture: ComponentFixture<OrderedOrdersComponent>;
 
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ OrderedOrdersComponent ],
      providers:[OrdersService, MockBackend, BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        } ]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

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
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      //other component in Menu Comp
      //expect(compiled.querySelector('app-display-orders')).not.toBe(null);
  })));
});
