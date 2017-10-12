import { Component, OnInit,Input } from '@angular/core';
import { NgbDateStruct, NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NdbDateComponent } from './date.component';
import { OrderClass } from '../orderClass.component';
import { OrdersService } from '../orders.service';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import{Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent implements OnInit {

  @Input() item: string = "idly";
  
  buttonCartdisp = "block";
  buttonDatedisp = "none";
  newOrder: OrderClass;
  private batterItems;
  public orders: OrderClass[];

  monthName = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private modal: NgbModal, private ordersService: OrdersService,
               private http:Http ) { }
  ngOnInit(){ 
    this.http.get('api/batterItems').map(res=> res.json().data).subscribe(res=>{this.batterItems= res;});
    this.orders = this.ordersService.getOrders();
    this.displayButtons();
  }
  displayButtons():void{
    this.buttonCartdisp = "block";
    this.buttonDatedisp = "none";
    for (var i=0;i<this.orders.length;i++) {
      if(this.orders[i].name == this.item){
      this.buttonCartdisp = "none";
      this.buttonDatedisp = "block";
      break;
      }
    }
  }
  AddDateAndPackets(order: OrderClass) {
    order.name = this.item;
   for(var i=0;i<this.batterItems.length;i++)
      if(order.name === this.batterItems[i].name)
        order.price = this.batterItems[i].price;
    this.ordersService.addOrder(order);
    this.displayButtons();

  }
  deletePacket(order: OrderClass): void {
    var ind = this.orders.indexOf(order);
    this.orders[ind].packets--;
    //this.ordersService.decrementOrderPacket(this.orders[ind]); 
    if (order.packets == 0) {
      this.ordersService.deleteOrder(order);
    }
    this.displayButtons();
  }
  addPackets(order): void {
    var ind = this.orders.indexOf(order);
    this.orders[ind].packets++;
    //this.ordersService.incrementOrderPacket(this.orders[ind]);
  }

  open() {
    this.newOrder = new OrderClass();
    let options: NgbModalOptions = {
      size: 'sm'
    };
    const modalRef = this.modal.open(NdbDateComponent, options);
    modalRef.componentInstance.Choosedate = this.newOrder;

    modalRef.result.then((result) => {
      if (result) {
        this.AddDateAndPackets(result);
      }
    }, (reason) => {
      console.log(`Closed with reason : ${reason}`);
    });
  }
}




