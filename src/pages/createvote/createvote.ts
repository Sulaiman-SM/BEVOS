import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AdvancevotingPage } from '../advancevoting/advancevoting';


@Component({
  selector: 'page-createvote',
  templateUrl: 'createvote.html',
})
export class CreatevotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatevotePage');
  }
  
  toVotingPage(){
    this.navCtrl.push(AdvancevotingPage);
  }



}
