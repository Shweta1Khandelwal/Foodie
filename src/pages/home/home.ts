import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  information: any[];
 

  constructor(public navCtrl: NavController, private http: Http) {
    let localData = http.get('http://localhost:8100/assets/information.js').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })



  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }

//   checkItem(i){
//     if(i.toggleSection){
//       this.information[i].open = !this.information[i].open;
//     }
// else{
  
// }
  }
 

