import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import {CreateCharComponent} from "./components/create-char/create-char.component";
import {CharacterRoutingModule} from "./character-routing.module";
import {ColorPickerModule} from "ngx-color-picker";



@NgModule({
  declarations: [
    StartComponent,
    CreateCharComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    ColorPickerModule
  ]
})
export class CharacterModule { }
