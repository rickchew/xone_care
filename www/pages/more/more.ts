import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { HistoryPage } from '../history/history';
import { DashboardPage } from '../dashboard/dashboard';
/**
 * Generated class for the MorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  tab1Root: any = DashboardPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  d(){
    alert("In progress");
    console.log('hello one');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
