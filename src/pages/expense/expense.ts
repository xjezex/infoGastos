import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html',
})
export class ExpensePage {
  // https://github.com/swimlane/ngx-datatable/blob/master/assets/data/company.json
  rows = [
    {
      "name": "Ethel Price",
      "gender": "female",
      "age": 22
    },
    {
      "name": "Claudine Neal",
      "gender": "female",
      "age": 55
    },
    {
      "name": "Beryl Rice",
      "gender": "female",
      "age": 67
    },
    {
      "name": "Simon Grimm",
      "gender": "male",
      "age": 28
    }
  ];
 
  tablestyle = 'bootstrap';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  switchStyle() {
    if (this.tablestyle == 'dark') {
      this.tablestyle = 'bootstrap';
    } else {
      this.tablestyle = 'dark';
    }
  }

}
