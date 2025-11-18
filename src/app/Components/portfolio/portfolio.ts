import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-portfolio',
  imports: [
    MatDivider
  ],
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
