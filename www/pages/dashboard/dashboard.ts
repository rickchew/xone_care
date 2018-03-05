import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QrcodePage } from '../qrcode/qrcode';
import { ServerProvider } from '../../providers/server/server';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public server: ServerProvider) {
    // this.getQrCodeData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  /**
   * Qr scanner 
   */
  qrScanner() {
    this.navCtrl.push(QrcodePage);
  }

  d(){
    alert('In progress');
  }

  getQrCodeData() {
    this.server.getQrCode("http://care.x-one.asia/api/json_qr_details?code=30001524&pass=4711653")
      .subscribe((res) => {
        console.log(res)
      });
  }

}
