import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trait-form',
  templateUrl: './trait-form.component.html',
  styleUrls: ['./trait-form.component.css']
})
export class TraitFormComponent implements OnInit {

  numberOfTraits: Number = 0;
  parents = {
    0: [],
    1: []
  }
  incompleteForm: boolean = false;
  trait: String = "A";

  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
  }


  calculate(){
    if(this.parents[0].length != this.numberOfTraits || this.parents[1].length != this.numberOfTraits){
      this.incompleteForm = true;
    }else{
      this.incompleteForm = false;
      this.renameGenotypes();
      this.trait = "A";
    }
  }

  renameGenotypes(){
    for (var i = 0; i < this.numberOfTraits; i++) {
      this.parents[0][i] = this.genotype(this.parents[0][i]);
      this.parents[1][i] = this.genotype(this.parents[1][i]);
      console.log(this.trait);
      this.setNextTraitLetter()
    }
  }

  genotype(type: String){
    console.log(type);
    switch(type) {
      case "homozygous-d":
        return this.trait.repeat(2);
      case "heterozygous":
        return this.trait + this.trait.toLowerCase();
      case "homozygous-r":
        return this.trait.toLowerCase().repeat(2);
      default:
        break;
    }
  }

  setNextTraitLetter(){
    this.trait = String.fromCharCode(this.trait.charCodeAt(0) + 1)
  }

  
}
