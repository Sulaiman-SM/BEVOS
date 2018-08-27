import { Component } from '@angular/core';
import { App,NavController, NavParams } from 'ionic-angular';
import { AdvancevotingPage } from '../advancevoting/advancevoting';


@Component({
  selector: 'page-createvote',
  templateUrl: 'createvote.html',
})
export class CreatevotePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatevotePage');
  }
  
  toVotingPage(){
    this.app.getRootNav().push(AdvancevotingPage);
  }



}
