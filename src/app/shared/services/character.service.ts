import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public images: Map<string, string> = new Map();
  public races: string[] = ['Human', 'Elf', 'Dwarf'];
  public types: string[] = ['Warrior', 'Dude with bow', 'Mage'];
  public raceMessage: boolean;
  public classMessage: boolean;
  public colorMessage: boolean;
  public theme: string;
  public race: string;
  public type: string;
  public charBackground: string;
  public readonly raceMessageKey: string = 'raceMessage';
  public readonly classMessageKey: string = 'classMessage';
  public readonly colorMessageKey: string = 'colorMessage';
  public readonly charBackgroundKey: string = 'charBackground';
  public readonly themeKey: string = 'theme';
  public readonly raceKey: string = 'race';
  public readonly typeKey: string = 'type';


  constructor() {
    this.imagesInit();
    this.raceMessage = !!JSON.parse(window.localStorage.getItem(this.raceMessageKey) as string);
    this.classMessage = !!JSON.parse(window.localStorage.getItem(this.classMessageKey) as string);
    this.colorMessage = !!JSON.parse(window.localStorage.getItem(this.colorMessageKey) as string);
    this.race = JSON.parse(window.localStorage.getItem(this.raceKey) as string) ?? 'Human';
    this.type = JSON.parse(window.localStorage.getItem(this.typeKey) as string) ?? '';
    this.theme = JSON.parse(window.localStorage.getItem(this.themeKey) as string) ?? "Day";
    this.charBackground = JSON.parse(window.localStorage.getItem(this.charBackgroundKey) as string) ?? '#FFFFFF';
  }

  private imagesInit(): void {
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

  public updateRaceMessage(): void {
    this.raceMessage = true;
    window.localStorage.removeItem(this.raceMessageKey);
    window.localStorage.setItem(this.raceMessageKey, JSON.stringify(this.raceMessage));
  }

  public updateClassMessage(): void {
    this.classMessage = true;
    window.localStorage.removeItem(this.classMessageKey);
    window.localStorage.setItem(this.classMessageKey, JSON.stringify(this.classMessage));
  }

  public updateColorMessage(): void {
    this.colorMessage = true;
    window.localStorage.removeItem(this.colorMessageKey);
    window.localStorage.setItem(this.colorMessageKey, JSON.stringify(this.colorMessage));
  }

  public updateTheme(theme: string): void {
    this.theme = theme;
    window.localStorage.removeItem(this.themeKey);
    window.localStorage.setItem(this.themeKey, JSON.stringify(this.theme));
  }

  public updateRace(race: string): void {
    this.race = race;
    window.localStorage.removeItem(this.raceKey);
    window.localStorage.setItem(this.raceKey, JSON.stringify(this.race));
  }

  public updateType(type: string): void {
    this.type = type;
    window.localStorage.removeItem(this.typeKey);
    window.localStorage.setItem(this.typeKey, JSON.stringify(this.type));
  }

  public updateCharBackground(color: string): void {
    this.charBackground = color;
    window.localStorage.removeItem(this.charBackgroundKey);
    window.localStorage.setItem(this.charBackgroundKey, JSON.stringify(this.charBackground));
  }
}
