import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { OrdersService } from './orders.service';

describe('Orders Service', () => {
  let mockBackend:MockBackend;
  let orderservice : OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers:[OrdersService, MockBackend,BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        } ]
    });
  });

  describe('service method test',()=>{
     const mockResponse = {
        batterItems: [],
        OrderItems: [
          { id: 0, name: 'idly', date: { year: 2017, month: 7, day: 2 }, packets: 1, price: 50 }]
      };
    it('Testing', (inject([OrdersService, MockBackend], (orderservice, mockBackend) => {
     
      mockBackend.connections.subscribe((connection: MockConnection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });
      orderservice.getOrdersfromWeb().subscribe(res=>{
        //expect(res).toBeDefined();
        console.log(res);
      });
    })));
  });
});
