import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../shared/services/character.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-char',
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.scss']
})
export class CreateCharComponent implements OnInit{

  public images: Map<string, string>;
  public page: string = 'race';
  public message: boolean = false;
  public choices: string[] = [];
  public charData: string = '';
  public race: string = 'Human';
  public type: string = ''
  public readonly pages: string[] = ['race', 'class', 'color'];
  public color: string = '#FFFFF';

  constructor(public characterService: CharacterService,
              public activatedRoute: ActivatedRoute,
              public router: Router) {
    this.images = characterService.images;
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.page = params['page'];
      if (this.page === this.pages[0]) {
        this.choices = this.characterService.races;
        this.message = this.characterService.firstMessage;
        console.log(this.characterService.race);
        this.race = this.charData = this.characterService.race;
      } else if (this.page === this.pages[1]){
        this.choices = this.characterService.types;
        this.message = this.characterService.secondMessage;
        this.race = this.characterService.race;
        this.type = this.charData = this.characterService.type;
      } else {
        this.message = this.characterService.thirdMessage;
        this.race = this.characterService.race;
        this.type = this.characterService.type;
      }
    });
  }

  public onFirstMessage(){
    this.characterService.updateFirstMessage();
    this.message = this.characterService.firstMessage;
  }

  public onSecondMessage(){
    this.characterService.updateSecondMessage();
    this.message = this.characterService.secondMessage;
  }

  public onThirdMessage(){
    this.characterService.updateThirdMessage();
    this.message = this.characterService.thirdMessage;
  }

  public onRadio(charData: string){
    this.charData = charData;
    if (this.page === this.pages[0]) {
      this.race = charData;
      this.characterService.updateRace(charData);
    } else if (this.page === this.pages[1]){
      this.type = charData;
      this.characterService.updateType(charData);
    } else {
    }
  }

  public onTheme(key: string){

  }

  public onStep(stepDirection: boolean){
    const index = this.pages.findIndex(item => item === this.page);
    if(stepDirection) {
      this.setDefaultRace();
      this.router.navigate(['/creating'], {queryParams: {page: this.pages[index + 1]}});
    } else {
      this.setDefaultType();
      this.router.navigate(['/creating'], {queryParams: {page: this.pages[index - 1]}});
    }
  }

  private setDefaultRace(){
    if(this.page === this.pages[0]){
      this.type = 'Warrior';
      this.characterService.updateType('Warrior');
    }
  }

  private setDefaultType(){
    if(this.page === this.pages[1]) {
      this.type = '';
      this.characterService.updateType('');
    }
  }
}
