import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public images: Map<string, string> = new Map();
  public races: string[] = ['Human', 'Elf', 'Dwarf'];
  public types: string[] = ['Warrior', 'Dude with bow', 'Mage'];
  public isRaceStep: boolean = true;
  public isTypeStep: boolean = false;
  public firstMessage: boolean;
  public secondMessage: boolean;
  public race: string;
  public type: string;
  public  readonly isRaceStepKey: string = 'isRaceStep';
  public  readonly isTypeStepKey: string = 'isTypeStep';
  public readonly firstMessageKey: string = 'firstMessage';
  public readonly secondMessageKey: string = 'secondMessage';
  public readonly raceKey: string = 'race';
  public readonly typeKey: string = 'type';


  constructor() {
    this.imagesInit();
    this.isRaceStep = !!JSON.parse(window.localStorage.getItem(this.isRaceStepKey) as string);
    this.isTypeStep = !!JSON.parse(window.localStorage.getItem(this.isTypeStepKey) as string);
    if(!this.isRaceStep && !this.isTypeStep){
      this.isRaceStep = true;
    }
    this.firstMessage = !!JSON.parse(window.localStorage.getItem(this.firstMessageKey) as string);
    this.secondMessage = !!JSON.parse(window.localStorage.getItem(this.secondMessageKey) as string);
    this.race = JSON.parse(window.localStorage.getItem(this.raceKey) as string) ?? 'Human';
    this.type = JSON.parse(window.localStorage.getItem(this.typeKey) as string) ?? '';
  }

  private imagesInit(){
    this.images.set('Human', '1563214703920.png');
    this.images.set('HumanWarrior', '1563214718531.png');
    this.images.set('HumanDude with bow', '1563214729859.png');
    this.images.set('HumanMage', '1563214741495.png');
    this.images.set('Elf', '1563214750637.png');
    this.images.set('ElfDude with bow', '1563214759160.png');
    this.images.set('ElfMage', '1563214768040.png');
    this.images.set('ElfWarrior', '1563214777507.png');
    this.images.set('Dwarf', '1563214787649.png');
    this.images.set('DwarfWarrior', '1563214797711.png');
    this.images.set('DwarfDude with bow', '1563214810300.png');
    this.images.set('DwarfMage', '1563214820031.png');
  }

  public updateFirstMessage(){
    this.firstMessage = true;
    window.localStorage.removeItem(this.firstMessageKey);
    window.localStorage.setItem(this.firstMessageKey, JSON.stringify(this.firstMessage));
  }

  public updateSecondMessage(){
    this.secondMessage = true;
    window.localStorage.removeItem(this.secondMessageKey);
    window.localStorage.setItem(this.secondMessageKey, JSON.stringify(this.secondMessage));
  }

  public updateRace(race: string){
    this.race = race;
    window.localStorage.removeItem(this.raceKey);
    window.localStorage.setItem(this.raceKey, JSON.stringify(this.race));
  }

  public updateType(type: string){
    this.type = type;
    window.localStorage.removeItem(this.typeKey);
    window.localStorage.setItem(this.typeKey, JSON.stringify(this.type));
  }

  public updateStep(stepDirection: boolean){
    if(this.isRaceStep){
      this.isRaceStep = false;
      this.isTypeStep = true;
      this.updateType('Warrior');
      return;
    }
    if(this.isTypeStep && !stepDirection){
      this.isTypeStep = false;
      this.isRaceStep = true;
      this.updateType('');
      return;
    }
  }

}
