import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



import { ExpensePage } from '../pages/expense/expense';
import { IncomePage } from '../pages/income/income';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SearchPage } from '../pages/search/search';
import { AddexpensePage } from '../pages/addexpense/addexpense';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ExpensePage,
    IncomePage,
    HomePage,
    TabsPage,
    SearchPage,
    AddexpensePage
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExpensePage,
    IncomePage,
    HomePage,
    TabsPage,
    SearchPage,
    AddexpensePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
