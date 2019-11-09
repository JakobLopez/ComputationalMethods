import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trait-form',
  templateUrl: './trait-form.component.html',
  styleUrls: ['./trait-form.component.css']
})
export class TraitFormComponent implements OnInit {

  numberOfTraits: Number = 0

  constructor() { }

  ngOnInit() {
  }

}
