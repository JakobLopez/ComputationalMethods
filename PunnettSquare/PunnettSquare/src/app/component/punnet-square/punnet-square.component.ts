import { Component, OnInit } from '@angular/core';
import { PermutationService } from 'src/app/service/permutation.service';

@Component({
  selector: 'app-punnet-square',
  templateUrl: './punnet-square.component.html',
  styleUrls: ['./punnet-square.component.css']
})
export class PunnetSquareComponent implements OnInit {

  parent1 = []
  parent2 = []

  constructor(public permutationService: PermutationService) { }

  ngOnInit() {
    this.parent1 = this.permutationService.parent1Perms;
    this.parent2 = this.permutationService.parent2Perms;
  }

}
