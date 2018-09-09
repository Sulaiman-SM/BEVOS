import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Keyboard } from 'ionic-angular'

@Component({
  selector: 'page-advancevoting',
  templateUrl: 'advancevoting.html',
})
export class AdvancevotingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private keyboard: Keyboard) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvancevotingPage');
  }

  choose(){
    
  }

}
