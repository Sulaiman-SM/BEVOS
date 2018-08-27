import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { CreatevotePage } from '../pages/createvote/createvote';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { AdvancevotingPage } from '../pages/advancevoting/advancevoting';
import { ResultsPage } from '../pages/results/results';
import { TabsPage } from '../pages/tabs/tabs';


import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';





import { NativeStorage } from '@ionic-native/native-storage';

export const firebaseConfig = {  
  //add firebase keys of web api
  apiKey: "AIzaSyAyLzmv4684oommAcwfzCUQPHpyBi0QQvs",
    authDomain: "myfireapp-2cdd0.firebaseapp.com",
    databaseURL: "https://myfireapp-2cdd0.firebaseio.com",
    projectId: "myfireapp-2cdd0",
    storageBucket: "myfireapp-2cdd0.appspot.com",
    messagingSenderId: "1094927797665"
  };
  
  firebase.initializeApp(firebaseConfig);
  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ProfilePage,
    CreatevotePage,
    ForgotpasswordPage,
    ResultsPage,
    TabsPage,
    AdvancevotingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
     AngularFireAuthModule,
     AngularFireDatabaseModule,
     ChartsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    SignupPage,
    ProfilePage,
    CreatevotePage,
    ResultsPage,
    TabsPage,
    ForgotpasswordPage,
    AdvancevotingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    NativeStorage,
    CallNumber,
    Geolocation,
    Camera,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    // Chart
  ]
})
export class AppModule {}
