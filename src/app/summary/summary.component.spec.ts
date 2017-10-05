import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { SummaryComponent } from './summary.component';

import { OrdersService } from '../orders.service';

describe('Summary Component', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;
  let orderservice :OrdersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryComponent ],
      imports: [ HttpModule ],
      providers:[ OrdersService, MockBackend,BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
   // orderservice = fixture.debugElement.injector.get(OrdersService);
    fixture.detectChanges();
  });

  describe('After Paying ',()=>{
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
      //expect(component.pay()[0].name).toContain('idly');
      console.log(component);
    })));
  })
});
