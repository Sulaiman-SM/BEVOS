import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SigninPage } from '../../pages/signin/signin';

/**
 * Generated class for the IntrosliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-introslider',
  templateUrl: 'introslider.html',
})
export class IntrosliderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntrosliderPage');
  }



  goToSignIn(){
    this.navCtrl.push(SigninPage);

  }


}
