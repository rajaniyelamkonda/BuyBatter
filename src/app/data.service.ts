import { InMemoryDbService } from 'angular-in-memory-web-api';
import {OrderClass} from './orderClass.component';
export class DataService implements InMemoryDbService {
  createDb() {
      let batterItems = [
        {id:0, name:'Idly', price:50, url:'./assets/images/Idly.jpg', type: 'Batter'},
        {id:1, name:'Poori', price:40, url:'./assets/images/Poori.jpg', type:'Flour'},
        {id:2, name:'chapathi', price:40, url:'./assets/images/chapathi.jpg', type:'Flour'},
        {id:3, name:'Dosa', price:50, url:'./assets/images/Dosa.jpg', type: 'Batter'},
        {id:4, name:'Vada', price:50, url:'./assets/images/Vada.jpg', type: 'Batter'}
      ];  
      // let OrderItems : OrderClass[]= [{id:0,name : "",date: {year:2017,month:8,day:3},packets:1,price:50}];
      let OrderItems : OrderClass[]= [];
      return {batterItems, OrderItems};
  }
}