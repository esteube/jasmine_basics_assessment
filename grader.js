module.exports ={
  letterGrade: function(num){
    if(num > 90){
    return 'A';
  }
  else if (num >= 80 && num <= 89) {
    return 'B';
  }
  else if (num >= 70 && num <= 79){
    return 'C';
  }
  else if(num >= 60 && num <= 69){
    return 'D';
  }
  else if (num >= 0 && num < 59) {
    return 'F';
  }
},

average: function(array){
  var sum = 0;
  for(i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum/array.length;
}
};

medianScore: function median(array) {

   array.sort();
   var half = Math.floor(array.length/2);
   if(array.length % 2){
       return array[half];
}
   else {
       return (array[half-1] + array[half]) / 2;
}

}
