import { Component, OnInit } from '@angular/core';
import { OrderClass } from '../orderClass.component';
import { OrdersService } from '../orders.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private orderService: OrdersService, private http: Http, private router : Router, private appComponent : AppComponent) { }

  public orders ;
  totalPrice: number = 0;
  paid = false;
  private headers = new Headers({ 'Content-Type' : 'application/json' });

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    for (var i = 0; i < this.orders.length; i++)
      this.totalPrice = this.totalPrice + this.orders[i].price * this.orders[i].packets;
  }
  pay() {
    this.orderService.addOrderstoWeb(this.orders).subscribe(res => 
          { this.orders.length = 0; 
            this.paid = true;
            this.appComponent.alertClosed = true;
            this.router.navigate(['/NavTabs']);
          });
   /* this.http
    .post('api/OrderItems', JSON.stringify(this.orders), { headers: this.headers })
    .map(res => { res.json().data;console.log(res); }).subscribe(res=>console.log(res))*/    
    return this.orders;
  }
}
