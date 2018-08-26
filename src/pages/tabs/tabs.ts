import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreatevotePage } from '../../pages/createvote/createvote';
import { ProfilePage } from '../../pages/profile/profile';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabsRootpage: any = HomePage;

  iconsArray = [

    { "name": "ios-home", "des": "Home", "page": HomePage },
    { "name": "ios-hand", "des": "Create VOTE", "page": CreatevotePage },
    { "name": "md-person", "des": "Profile", "page": ProfilePage }
  ];




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }



  changePage(k) {

    this.tabsRootpage = this.iconsArray[k].page;

  }

}
