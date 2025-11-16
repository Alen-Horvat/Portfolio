import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  constructor(
    private router: Router
  )
  {

  }

}
