import { Proxy } from 'src/helpers/proxy/proxy';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  protected isLogged: Boolean;

  constructor(
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private proxy: Proxy
  ) {
    this.isLogged = false;
  }

  ngOnInit() {
  }

  async loginAction(event) {
    const loader = await this.loadingCtrl.create({
      message: "Entrando",
      duration: 3000
    });

    loader.present();

    var params = {
      email: event.target[0].value,
      password: event.target[1].value
    };

    this.proxy.user.login(params)
      .then((result: { status: boolean, content: any }) => {
        loader.dismiss();

        if (result.status) {
          localStorage.setItem('user', JSON.stringify(result.content));
          localStorage.setItem('token', result.content.token);

          this.isLogged = true;
          this.navCtrl.navigateForward('dashboard');
        } else {
          this.toastCtrl.create({
            message: result.content,
            duration: 3000,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Cerrar",
            cssClass: 'message error-message'
          }).then(toast => {
            toast.present();
          });
        }
      }).catch(console.log);
  }
}
