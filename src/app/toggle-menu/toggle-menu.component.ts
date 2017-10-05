import { Component, OnInit, Input, trigger, state, animate, transition, style  } from '@angular/core';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css'],
  animations:[
    trigger('toggleState',[
      state('true',style({transform: 'translateX(0%)', position:'absolute', top:'0px',left:'0px'})),
      state('false',style({display:'none',transform: 'translateX(-100%)'})),
      transition('*=>*', [animate('300ms')]),
      transition('true=>true', [animate('300ms')]),
      transition('void=>*', animate('1ms'))
    ])
  ]
})
export class ToggleMenuComponent {

  @Input() toggle = false;
  ToggleClick(){
    this.toggle = false;
  }
}
