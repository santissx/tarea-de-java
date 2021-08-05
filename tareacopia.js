var myArray = [1,8,41,35,78,100,25,14];
var i = 0;
var max = 1;
for (i=0; i < myArray.length; i++){
    if(myArray[i]>max){
        max = myArray[i];
    }
}
console.log(max);
