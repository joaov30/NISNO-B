import { Component, OnInit } from '@angular/core';
import { Postar } from "../models/postar.model";
import { ActivatedRoute } from "@angular/router";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  LoadingController,
  ToastController,
  NavController
} from "@ionic/angular";


@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.page.html',
  styleUrls: ['./editar-post.page.scss'],
})
export class EditarPostPage implements OnInit {
  postar = {} as Postar;
  id: any;


  constructor(
    private actRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
  }

  async getPostById(id: string) {
    let loader = await this.loadingCtrl.create({
      message: "Espere por favor..."
    });

    loader.present();

    this.firestore.doc("posts/" + id).valueChanges().
      subscribe(data => {
        this.postar.titulo = data["titulo"];
        this.postar.detalhe = data["detalhe"];
        loader.dismiss();
      });
  }

  async updatePost(post: Postar) {
    if (this.validarFormulario()) {
      let loader = await this.loadingCtrl.create({
        message: "Espere por favor..."
      });
      loader.present();
      try {
        await this.firestore.doc("posts/" + this.id).update(post);
      } catch (e) {
        this.showToast(e);
      }
      await loader.dismiss();
      this.navCtrl.navigateRoot("home");
    }
  }

  validarFormulario() {
    if (!this.postar.titulo) {
      this.showToast("Escreva o Título");
      return false;
    }
    if (!this.postar.detalhe) {
      this.showToast("Escreva o Detalhe");
      return false;
    }
    return true;
  }
  showToast(mensagem: string) {
    this.toastCtrl
      .create({
        message: mensagem,
        duration: 3000
      })
      .then(toastData => toastData.present());
  }
}
