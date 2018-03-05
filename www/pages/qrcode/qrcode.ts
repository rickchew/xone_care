import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ServerProvider } from '../../providers/server/server';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  constructor(public navCtrl: NavController,
    public androidPermissions: AndroidPermissions,
    public qrScanner: QRScanner,
    public server: ServerProvider) {

    this.qrscanner();
  }

  qrscanner() {

    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          // alert('authorized');

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            var d = text.indexOf("x-one");

            try {
              if (d > -1) {
                alert("Qr Activated. qrLink : "+text);
                // this.server.getQrCode(text)
                //   .subscribe(res => {
                //     alert('data fetched');
                //     console.log('qr code'+ res);
                //     this.qrScanner.hide(); // hide camera preview
                //     scanSub.unsubscribe(); // stop scanning
                //     this.navCtrl.pop();
                //   });
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
                this.navCtrl.pop();
              } else {
                alert('Unrecognized QR');
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
                this.navCtrl.pop();
              }
            } catch (error) {
              console.log('qr code', error);
            }
          });

          this.qrScanner.resumePreview();

          // show camera preview
          this.qrScanner.show()
            .then((data: QRScannerStatus) => {
              // alert(data.showing);
            }, err => {
              alert(err);

            });

          // wait for user to scan something, then the observable callback will be called
        } else if (status.denied) {
          alert('denied');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          alert('else');
        }
      })
      .catch((e: any) => {
        alert('Error is' + e);
      });
  }

  getData(res: any, scanSub : any) {
    alert('data fetched');
    console.log('qr code', res);
    this.qrScanner.hide(); // hide camera preview
    scanSub.unsubscribe(); // stop scanning
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

  ionViewWillLeave() {
    this.qrScanner.hide();
  }

}
