import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QRScanner } from '@ionic-native/qr-scanner';
import { AndroidPermissions } from '@ionic-native/android-permissions';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QrcodePage } from '../pages/qrcode/qrcode';
import { MorePage } from '../pages/more/more';
import { HistoryPage } from '../pages/history/history';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ServerProvider } from '../providers/server/server';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    QrcodePage,
    MorePage,
    HistoryPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    QrcodePage,
    MorePage,
    HistoryPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider
  ]
})
export class AppModule {}
