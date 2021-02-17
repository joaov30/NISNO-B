import { Component, OnInit } from '@angular/core';
import { Prestador } from '../models/prestador.model';

import {
  ToastController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";

import { AngularFirestore, AngularFirestoreCollection }
  from '@angular/fire/firestore';

@Component({
  selector: 'app-cadastrarprestador',
  templateUrl: './cadastrarprestador.page.html',
  styleUrls: ['./cadastrarprestador.page.scss'],
})
export class CadastrarprestadorPage implements OnInit {
  prestador = {} as Prestador;
  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  async cadastrar(prestador: Prestador) {
    console.log(prestador);
    if (this.formValidation()) {
      // mostrar loader
      let loader = await this.loadingCtrl.create({
        message: "Por Favor espere...",
      });
      loader.present();
      try {
        // entrar com usuário e senha
        await this.afAuth
          .createUserWithEmailAndPassword(prestador.email, prestador.senha)
          .then((data) => {
            console.log(data);
            // redirecionar para a página home
            this.navCtrl.navigateRoot("login");
          })
          .catch();
      } catch (e) {
        this.showToast(e);
      }
      // dispensar loader
      loader.dismiss();
    }
  }


  formValidation() {
    if (!this.prestador.email) {
      // mostrar toast message
      this.showToast("Digite seu e-mail");
      return false;
    }
    if (!this.prestador.senha) {
      // mostrar toast message
      this.showToast("Digite sua Senha");
      return false;
    }
    if (!this.prestador.nome) {
      // mostrar toast message
      this.showToast("Digite seu Nome");
      return false;
    }
    if (!this.prestador.tel) {
      // mostrar toast message
      this.showToast("Digite seu Telefone");
      return false;
    }
    if (!this.prestador.cpf) {
      // mostrar toast message
      this.showToast("Digite seu Cpf");
      return false;
    }
    return true;
  }
  showToast(mensagem: string) {
    this.toastCtrl
      .create({
        message: mensagem,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }

}
