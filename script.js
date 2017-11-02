
for (var i = 120; i < 141; i++) {
    console.log(i);
    
}
var arrNum =[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, -13, -13,-13]
var sum_array=0
var avg_array=0
var biggestNum=0
for (var x = 0; x < arrNum.length;x++) {
    sum_array=+sum_array+arrNum[x]
    if (arrNum[x]===null){biggestNum=0}
    else if (arrNum[x]>arrNum[x-1]) {biggestNum=+arrNum[x]
        
    }
}
    
    avg_array=sum_array/x
    console.log("the sum of the array is:"+sum_array);
    console.log("the averge of the array is:"+(avg_array).toFixed(1));
    console.log("the biggest number is: "+ biggestNum);

    