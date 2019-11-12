import { Component, OnInit } from '@angular/core';
import { PermutationService } from 'src/app/service/permutation.service';

@Component({
  selector: 'app-punnet-square',
  templateUrl: './punnet-square.component.html',
  styleUrls: ['./punnet-square.component.css']
})
export class PunnetSquareComponent implements OnInit {

  permutation = []

  constructor(private permutationService: PermutationService) { }

  ngOnInit() {
    this.permutation = this.permutationService.permutations
  }

}
