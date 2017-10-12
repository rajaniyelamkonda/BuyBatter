import { Component, Input, OnInit} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from './orders.service';
import { OrderClass } from './orderClass.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  orders: OrderClass[]
  displayDiv = false;
  display = false;
  alertClosed = false;
  constructor(private orderService: OrdersService) {}
  ngOnInit(){
    this.orders = this.orderService.getOrders();
    setTimeout(() => this.alertClosed = false, 25000);
  }
  
  getOrdersForUnitTest(): OrderClass[] {
    this.orders = this.orderService.getOrders();
    return this.orders;
  }
  divDisplay(){
    this.display = true;
    this.displayDiv = !this.display;
    
  }
  MainDiv(){    
    this.displayDiv = this.display == true ? true : false;
    this.display = false;
  }
  
 }
