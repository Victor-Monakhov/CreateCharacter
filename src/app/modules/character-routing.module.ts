import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateCharComponent} from "./components/create-char/create-char.component";
import {StartComponent} from "./components/start/start.component";
import {FinishComponent} from "./components/finish/finish.component";

const routes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'creating',
    component: CreateCharComponent
  },
  {
    path: 'finish',
    component: FinishComponent
  }
  ];

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CharacterRoutingModule {}
