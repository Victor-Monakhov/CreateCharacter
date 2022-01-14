import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../shared/services/character.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-char',
  host: {
    "[class.light-theme]": "(theme === 'Day')",
    "[class.dark-theme]": "(theme === 'Night')"
  },
  templateUrl: './create-char.component.html',
  styleUrls: ['./create-char.component.scss']
})
export class CreateCharComponent implements OnInit {

  public images: Map<string, string>;
  public page: string = 'race';
  public message: boolean = false;
  public choices: string[] = [];
  public charData: string = '';
  public race: string = 'Human';
  public type: string = ''
  public themes: string[] = ['Day', 'Night'];
  public theme: string = 'Day';
  public isAdvice: boolean = false;
  public charBackground: string = '#FFFFFF';
  public advices: Map<string, string> = new Map();
  public readonly pages: string[] = ['race', 'class', 'color'];

  constructor(public characterService: CharacterService,
              public activatedRoute: ActivatedRoute,
              public router: Router) {
    this.images = characterService.images;
    this.advices.set('Human', 'Seriously?\nHuman?\nYou are human in real life...');
    this.advices.set('Elf', 'Elf?\nAre you gay?');
    this.advices.set('Dwarf', 'Good choice.');
    this.advices.set('Warrior', 'Original');
    this.advices.set('Dude with bow', 'Classic');
    this.advices.set('Mage', 'LOL really?');
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.page = params['page'];
      this.theme = this.characterService.theme;
      this.race = this.characterService.race;
      this.type = this.characterService.type;
      this.charBackground = this.characterService.charBackground;
      if (this.page === this.pages[0]) {
        this.choices = this.characterService.races;
        this.message = this.characterService.raceMessage;
        this.charData = this.characterService.race;
      } else if (this.page === this.pages[1]) {
        this.choices = this.characterService.types;
        this.message = this.characterService.classMessage;
        this.charData = this.characterService.type;
      } else {
        this.message = this.characterService.colorMessage;
      }
    });
  }

  public onRaceMessage() {
    this.characterService.updateRaceMessage();
    this.message = this.characterService.raceMessage;
  }

  public onClassMessage() {
    this.characterService.updateClassMessage();
    this.message = this.characterService.classMessage;
  }

  public onColorMessage() {
    this.characterService.updateColorMessage();
    this.message = this.characterService.colorMessage;
  }

  public onAdviceClose() {
    this.isAdvice = false;
  }

  public onRadio(charData: string) {
    this.charData = charData;
    if (this.page === this.pages[0]) {
      this.race = charData;
      this.characterService.updateRace(charData);
      this.isAdvice = true;
    } else if (this.page === this.pages[1]) {
      this.type = charData;
      this.characterService.updateType(charData);
      this.isAdvice = true;
    }
  }

  public onTheme(theme: string) {
    this.theme = theme;
    this.characterService.updateTheme(this.theme);
  }

  public onStep(stepDirection: boolean) {
    this.isAdvice = false;
    const index = this.pages.findIndex(item => item === this.page);
    if (stepDirection) {
      this.setDefaultRace();
      if (index === this.pages.length - 1) {
        this.characterService.updateCharBackground(this.charBackground);
        this.router.navigate(['/finish']);
        return;
      }
      this.router.navigate(['/creating'], {queryParams: {page: this.pages[index + 1]}});
    } else {
      this.setDefaultType();
      this.router.navigate(['/creating'], {queryParams: {page: this.pages[index - 1]}});
    }
  }

  private setDefaultRace() {
    if (this.page === this.pages[0]) {
      this.type = 'Warrior';
      this.characterService.updateType('Warrior');
    }
  }

  private setDefaultType() {
    if (this.page === this.pages[1]) {
      this.type = '';
      this.characterService.updateType('');
    }
  }
}
