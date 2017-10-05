import { Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { OrderClass} from '../orderClass.component';

//const tomarrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var tomarrow = new Date();
tomarrow.setDate(tomarrow.getDate()+1);

@Component({
  selector: 'date-comp',
  templateUrl: './date.component.html'
})

export class NdbDateComponent { 

  @Input() Choosedate :OrderClass;

  constructor(config: NgbDatepickerConfig, public activeModal: NgbActiveModal) {
    // customize default values of datepickers used by this component tree
  
    config.minDate = { year: tomarrow.getFullYear(), month: tomarrow.getMonth() + 1, day: tomarrow.getDate() };
    config.maxDate = { year: tomarrow.getFullYear(), month: tomarrow.getMonth() + 3, day: 31 };
  }
  //constructor(public activeModal: NgbActiveModal) {};
  monthName = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  AddDate(){
    this.activeModal.close(this.Choosedate);
  }

  close()
  {
    //this.Choosedate = null ;
    this.activeModal.close(undefined);
  }
  
}