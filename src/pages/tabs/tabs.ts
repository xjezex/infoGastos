import { Component } from '@angular/core';

import { ExpensePage } from '../expense/expense';
import { IncomePage } from '../income/income';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExpensePage;
  tab3Root = IncomePage;
  tab4Root = SearchPage;

  constructor() {

  }
}
