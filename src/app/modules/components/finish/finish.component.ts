import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CharacterService} from "../../../shared/services/character.service";

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class FinishComponent implements OnInit {

  constructor(public router: Router, public characterService: CharacterService) {
  }

  ngOnInit(): void {
  }

  public onAgain(): void {
    this.characterService.updateRace('Human');
    this.characterService.updateType('');
    this.router.navigate(['/']);
  }
}
