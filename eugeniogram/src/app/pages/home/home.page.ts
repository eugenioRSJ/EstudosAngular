import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{
 
  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}
  ngOnInit() {

    const img = localStorage.getItem('eugeniogram.post');
    if (img) this.showMessage("Você tem uma publicação não salva");
  }

  async showMessage(message: string) {
    const toast = await this.toastCtrl.create({
      message: message, duration: 3000, buttons: [
        {
          icon: "send",
          handler: () => {
            this.navCtrl.navigateForward("/post");
          }
        }
      ]
    });
    toast.present();
  }
}
