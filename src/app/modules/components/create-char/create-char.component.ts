import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../shared/services/character.service";

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.scss']
})
export class CreateCharComponent implements OnInit{


  constructor(public characterService: CharacterService) {}

  public ngOnInit(): void {
  }

  public onFirstMessage(){
    this.characterService.updateFirstMessage();
  }

  public onSecondMessage(){
    this.characterService.updateSecondMessage();
  }

  public onRace(race: string){
    this.characterService.updateRace(race);
  }

  public onType(type: string){
    this.characterService.updateType(type);
  }

  public onStep(stepDirection: boolean){
    this.characterService.updateStep(stepDirection);
  }
}
