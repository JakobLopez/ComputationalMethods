import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermutationService {

  parent1Perms = []
  parent2Perms = []

  constructor() { }

  
getAllGenotypes(array){
  var allGenoTypes = []
  
  if(array.length == 1){
    allGenoTypes.push(array[0].charAt(0));
    allGenoTypes.push(array[0].charAt(1));
  }
  else if (array.length == 2){
    return this.foil(array[0], array[1]);
  }else{
    allGenoTypes = this.getAllGenotypes(array.slice(0, 2));
    array.shift();
    array.shift();
    var merge = []
    merge[0] = allGenoTypes
    allGenoTypes = this.getAllGenotypes(merge.concat(array));
  }
  return allGenoTypes
}

foil(array, geno){
  var newlist = [];
  for(var item in array){
    for(var j= 0; j < 2; j++){
      if(array.length != 1)
          newlist.push(array[item] + geno.charAt(j));
      else{
        for(var k = 0; k < 2; k++){
          newlist.push(array[item].charAt(j) + geno.charAt(k));
        }
      }
    }
  }
  return newlist;
}
}
