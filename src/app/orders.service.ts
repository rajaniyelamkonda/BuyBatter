import { Injectable } from '@angular/core';
import { OrderClass } from './orderClass.component';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }
  orders: OrderClass[] = [];

  getSum(): Number {
    return 5;
  }

  getSummury(): Number {
    return 10;
  }

  getOrders(): OrderClass[] {
    return this.orders;
  }
  addOrder(order: OrderClass): void {
    this.orders.push(order);
  }
  deleteOrder(order: OrderClass): void {
    var ind = this.orders.indexOf(order);
    this.orders.splice(ind, 1);
  }

  private Url = 'api/OrderItems';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  addOrderstoWeb(orders: OrderClass[]): Observable<any> {
    let encoded_data = JSON.stringify({ orders });

    return this.http
      .post(this.Url, encoded_data, { headers: this.headers })
      .map(res => { res.json().data as OrderClass[]; })
      .catch(this.errorMessage);
  }
  private errorMessage(err: any): Observable<any> {
    console.log('Error While getting Items from Web', err);
    return Observable.throw(err.message || err);
  }
  /*incrementOrderPacket(order: OrderClass): void {
    var ind = this.orders.indexOf(order);
    this.orders[ind].packets++;
  }
  decrementOrderPacket(order: OrderClass): void {
    var ind = this.orders.indexOf(order);
    this.orders[ind].packets--;
  }

  // using observables
  private Url = 'api/OrderItems';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  getOrdersfromWeb(): Observable<any> {
    return this.http
      .get(this.Url)
      .map(res => { res.json().data;})
      .catch(this.errorMessage);
  }

  addOrderstoWeb(orders: OrderClass[]): Observable<any> {
    let encoded_data = JSON.stringify({ orders });

    return this.http
      .post(this.Url, encoded_data, { headers: this.headers })
      .map(res => {  return (res.json().data as OrderClass[]); })
      .catch(this.errorMessage);
  }

  deleteOrderfromWeb(order: OrderClass): Observable<void> {
    const url = `${this.Url}/${order.id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.errorMessage);
  }
  updateOrder(order: OrderClass): Observable<OrderClass> {
    const urlById = `${this.Url}/${order.id}`;
    return this.http
      .put(urlById, JSON.stringify(order), { headers: this.headers })
      .map( ()=> order)
      .catch(this.errorMessage);
  }
  private errorMessage(err: any): Observable<any> {
    console.log('Error While getting Items from Web', err);
    return Observable.throw(err.message || err);
  }*/

  /*  // Using Promise 
  private Url = 'api/OrderItems';
  private headers = new Headers({'Content-Type': 'application/json'});
  getOrdersfromWeb():Promise<any>{
    return this.http
      .get(this.Url)
      .toPromise()
      .then(res=> { this.orders=res.json().data;console.log(this.orders)})
      .catch(this.errorMessage);
  }
  addOrdesrtoWeb(orders : OrderClass[]) :Promise<any>{ 
    return this.http
      .post(this.Url, JSON.stringify({orders : OrderClass[]}), {headers: this.headers})
      .toPromise()
      .then(res => {res.json().data as OrderClass[];})
      .catch(this.errorMessage);
  }

  deleteOrderfromWeb(order: OrderClass) : Promise<void>{
    const url = `${this.Url}/${order.id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.errorMessage);
  }
  updateOrder(order: OrderClass) : Promise<OrderClass>{
    const urlById = `${this.Url}/${order.id}`;
    return this.http
      .put(urlById, JSON.stringify(order), {headers: this.headers})
      .toPromise()
      .then(() => order)
      .catch(this.errorMessage);
  }
  private errorMessage(err:any):Promise<any>{
    console.log('Error While getting Items from Web', err);
    return Promise.reject(err.message || err);
  }*/
}
