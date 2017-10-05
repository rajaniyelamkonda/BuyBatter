import { Component, OnInit } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import{Observable} from 'rxjs/Observable';

@Component({
  selector: 'menu-comp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class MenuComponent implements OnInit {  
  
  private batterItems;
  /*constructor(private batteritemsService :BatterItemsService ){}
  ngOnInit(){
    this.batteritemsService.getbatteritems()
                          .subscribe(res=>{this.batterItems= res;console.log(this.batterItems);});
  }*/
  constructor(private http : Http ){}
  ngOnInit(){
    this.http.get('api/batterItems').map(res => res.json().data)
                          .subscribe(res=>{this.batterItems= res;});
  }
  
}



