import { Component, OnInit } from '@angular/core';
import { PermutationService } from 'src/app/service/permutation.service';
import { flatMap } from '../../flatMap';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-punnet-square',
  templateUrl: './punnet-square.component.html',
  styleUrls: ['./punnet-square.component.css']
})
export class PunnetSquareComponent implements OnInit {

  parent1 = []
  parent2 = []
  punnettSquareArea = 0
  calculation = []
  counts = {}
  objectKeys = Object.keys;


  constructor(public permutationService: PermutationService) { }

  ngOnInit() {
    this.parent1 = this.permutationService.parent1Perms;
    this.parent2 = this.permutationService.parent2Perms;
    this.punnettSquareArea = Math.pow(this.parent1.length, 2);
    this.getResults();
  }

  async getResults(){
    this.calculation = await this.permutationService.calcPunnettSquare(this.parent1, this.parent2)
    this.calculation = this.permutationService.alphabetize(this.calculation);
    this.counts = this.countTypes();
  }

  countTypes(){
    var temp = {};
    this.calculation.forEach(function(x) { 
      x.forEach(function(y){
        temp[y] = (temp[y] || 0)+1;
      }) 
    });
    return temp;
  }

}
