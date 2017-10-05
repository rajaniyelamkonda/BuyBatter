import { Component, OnInit } from '@angular/core';
import { OrderClass } from '../orderClass.component';
import{ OrdersService } from '../orders.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ordered-orders',
  templateUrl: './ordered-orders.component.html',
  styleUrls: ['./ordered-orders.component.css']
})

export class OrderedOrdersComponent implements OnInit {

  public orders;
  constructor(private orderservice:OrdersService, private http: Http) {}
  private Url = 'api/OrderItems';
  ngOnInit(){
    //this.orderservice.getOrdersfromWeb().subscribe(res=>{ this.orders = res;console.log(res);});
    this.http.get(this.Url).map(res => { return res.json().data;}).subscribe(res => {this.orders = res;console.log(res);});
   }
}
