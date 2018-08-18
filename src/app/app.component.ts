import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//  import { SignupPage } from '../pages/signup/signup';
//  import { SigninPage } from '../pages/signin/signin';
import { CreatevotePage } from '../pages/createvote/createvote';
import { ProfilePage } from '../pages/profile/profile';
// import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { HomePage } from '../pages/home/home';
// import { AdvancevotingPage } from '../pages/advancevoting/advancevoting';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CreatevotePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  iconsArray = [

    { "name":"ios-home", "des":"Home"},
     {"name":"ios-hand","des":"Create VOTE"},
    { "name":"md-person","des":"Profile"}
 ]
 
 pageArray=[HomePage,CreatevotePage,ProfilePage];
 
 
 changePage(k){
 
 this.rootPage=this.pageArray[k]
 
 }
}

