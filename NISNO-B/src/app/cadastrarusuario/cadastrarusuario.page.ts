import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario.model';

import {
  ToastController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";

import { AngularFirestore, AngularFirestoreCollection }
  from '@angular/fire/firestore';

@Component({
  selector: 'app-cadastrarusuario',
  templateUrl: './cadastrarusuario.page.html',
  styleUrls: ['./cadastrarusuario.page.scss'],
})



export class CadastrarusuarioPage implements OnInit {
  usuario = {} as Usuario;

  constructor(private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController,
    //cria a coleção (banco) no firestore
    private colecaoUsuarios: AngularFirestoreCollection<Usuario>,
    private afs: AngularFirestore) {
    this.colecaoUsuarios = this.afs.collection<Usuario>('Usuarios')
  }


  ngOnInit() {
  }

  

  async cadastrar(usuario: Usuario) {
    console.log(usuario);
    if (this.formValidation()) {
      // mostrar loader
      let loader = await this.loadingCtrl.create({
        message: "Por Favor espere...",
      });
      loader.present();
      try {
        // entrar com usuário e senha
        await this.afAuth
          .createUserWithEmailAndPassword(usuario.email, usuario.senha)
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
    if (!this.usuario.email) {
      // mostrar toast message
      this.showToast("Digite seu e-mail");
      return false;
    }
    if (!this.usuario.senha) {
      // mostrar toast message
      this.showToast("Digite sua Senha");
      return false;
    }
    if (!this.usuario.nome) {
      // mostrar toast message
      this.showToast("Digite seu Nome");
      return false;
    }
    if (!this.usuario.tel) {
      // mostrar toast message
      this.showToast("Digite seu Telefone");
      return false;
    }
    if (!this.usuario.cpf) {
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

