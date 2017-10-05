import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

// const tomarrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var tomarrow = new Date();
tomarrow.setDate(tomarrow.getDate()+1);

@Component({
    selector:'Order-class',
    template:``
})

export class OrderClass {
  id: number=0;
  name : string ="";  
  date: NgbDateStruct = { year: tomarrow.getFullYear(), month: tomarrow.getMonth() + 1, day: tomarrow.getDate()};
  packets: number = 1;
  price:number = 50;
}
