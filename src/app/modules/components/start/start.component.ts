import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }

  public onStart(): void {
    this.router.navigate(['/creating'], {queryParams: {page: 'race'}});
  }
}
