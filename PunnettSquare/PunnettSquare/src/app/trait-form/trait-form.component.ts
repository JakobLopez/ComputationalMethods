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

  constructor(private formBuilder: FormBuilder) { 

  }

  ngOnInit() {
  }


  Calculate(){
    if(this.parents[0].length != this.numberOfTraits || this.parents[1].length != this.numberOfTraits){
      this.incompleteForm = true;
    }else{
      this.incompleteForm = false;
    }
  }
}
