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

  async calcPunnettSquare(parent1, parent2){
    var data = [];
    //row
    for(var p2 in parent2){
      var cols = []
      //column
      for(var p1 in parent1){
        var computed_val = parent1[p1] + parent2[p2]
        //alphabetically sort letters ignoring case
        cols.push(computed_val.split('').sort(
            function(a: String, b: String) {
              if (a.toLowerCase() < b.toLowerCase()) return -1;
              if (a.toLowerCase() > b.toLowerCase()) return 1;
              return 0;
            }).join(''))
      }
      data.push(cols);
    }
    return data;
  }

  alphabetize(data){
    var newData = data;
    for(var i = 0; i < data.length; i++){
      for(var j = 1; j < data[i].length; j ++){
        var arr = data[i][j].split("");
        for(var k = 0; k < arr.length; k+=2){
          if(arr[k] > arr[k + 1] ){
            var temp = arr[k];
            arr[k] = arr[k + 1]
            arr[k + 1] = temp;  
            
          }
        }

        var newstring = arr.join("");
        newData[i][j] = newstring; 
        console.log(newstring)
      }
    }
    console.log(newData);
    return newData;
  }


}
