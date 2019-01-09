import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddexpensePage } from '../addexpense/addexpense';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToAddExpense(){
  	this.navCtrl.push(AddexpensePage);
  }

}
