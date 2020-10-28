import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToPage(page: string) {
    this.menuCtrl.close(); //fecha o menu lateral con
    this.navCtrl.navigateRoot(page); //navego entre paginas
  }

}
