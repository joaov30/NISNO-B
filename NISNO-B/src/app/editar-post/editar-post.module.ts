import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPostPageRoutingModule } from './editar-post-routing.module';

import { EditarPostPage } from './editar-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPostPageRoutingModule
  ],
  declarations: [EditarPostPage]
})
export class EditarPostPageModule {}
