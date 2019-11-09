import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trait-form',
  templateUrl: './trait-form.component.html',
  styleUrls: ['./trait-form.component.css']
})
export class TraitFormComponent implements OnInit {

  numberOfTraits: Number = 0;
  parent1Traits = [];
  aprent2Traits = [];
  form;
  parent1 = {
    traits: [
      { name: 'homozygous-d',  selected: true, id: 1 },
      { name: 'heterozygous',  selected: false, id: 2 },
      { name: 'homozygous-r',  selected: false, id: 3 },
    ]
  }

  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      traits: this.buildTraits()
    });
  }

  ngOnInit() {
  }

  buildTraits() {
    const arr = this.parent1.traits.map(trait => {
      return this.formBuilder.control(trait.selected);
    });
    return this.formBuilder.array(arr);
  }

  get traits() {
    return this.form.get('traits');
  };

  display(){
    console.log("eyer");
    console.log(this.parent1Traits);
  }
}
