import { TestBed, async, fakeAsync, tick, ComponentFixture, inject } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppComponent } from './app.component';

import { OrdersService } from './orders.service';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent: ', () => {
  let orderservice: OrdersService;
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let mockBackend: MockBackend;
  let ordersItems ;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, HttpModule],
      providers: [OrdersService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    orderservice = fixture.debugElement.injector.get(OrdersService);
    //orderservice = TestBed.get(OrdersService);
    ordersItems = [{ id: 0, name: 'idly', date: { year: 2017, month: 7, day: 2 }, packets: 4, price: 50 }];
    let spy = spyOn(orderservice, 'getOrders').and.returnValue(ordersItems);

  }));

  it('orders are working properly',()=>{
    //expect(app.getOrdersForUnitTest()[0].name).toContain('idly');
    console.log(app);
  })
})
  

/* describe('AppComponent1', () => {

  let fixture;
  let comp;

  beforeEach(() => {
    // stub UserService for test purposes
    const ordersServiceStub = {
      getOrders() {
        return [
          { id: 0, name: 'idly', date: { year: 2017, month: 7, day: 2 }, packets: 4, price: 50 }];
      }
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, HttpModule],
      providers: [{ provide: OrdersService, useValue: ordersServiceStub }]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    // UserService from the root injector
    //let ordersService = TestBed.get(OrdersService);

  });

  it('orders perfectly', () => {
    console.log(comp);
  });

});


describe('AppComponent1', () => {

  let fixture;
  let comp;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule, HttpModule],
      providers: [OrdersService]
    });

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;

    // UserService from the root injector
    let ordersService = TestBed.get(OrdersService);

    let spy = spyOn(ordersService, 'getSum')
      .and.returnValue(1);

  });

  it('orders perfectly', () => {
    console.log(comp.getSum());
    console.log(comp.getSummury());
  });

});


fdescribe('MockBackend HeroService Example', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      { provide: ConnectionBackend, useClass: MockBackend },
      { provide: RequestOptions, useClass: BaseRequestOptions },
      Http,
      OrdersService,
    ]);
    this.heroService = this.injector.get(OrdersService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });

  it('getHeroes() should return some heroes', fakeAsync(() => {
    let result: OrderClass[];
    this.heroService.getOrdersfromWeb1().then((res) => {
      console.log(res.json().data); 
      result = res.json().data;
    });
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({
        data: [
          { id: 0, name: 'idly', date: { year: 2017, month: 7, day: 2 }, packets: 4, price: 50 }]
      }),
    })));
    console.log(this.lastConnection)
    tick();
    console.log(result.length);
    console.log(result[0].id);
    expect(result.length).toEqual(1, 'should contain given amount of orders');
    expect(result[0].id).toEqual(0, ' HERO_ONE should be the first hero');
    expect(result[0].name).toEqual("idly", ' HERO_ONE should be the first hero');
  }));
});*/


