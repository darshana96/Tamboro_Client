/*
// Other Vectors to test
var vector = [
    ['195°', '11%', '12%'],
    ['37°', '13%', '76%'],
    ['195°', '10%', '13%'],
    ['15°', '11%', '12%'],
    ['15°', '10%', '13%']

];
*/

var vector = [['195°', '11%', '12%'], ['37°', '13%', '76%'], ['15°', '11%', '12%']];


var newVector = [];


var firstIndex = 0


for (var i=0; i<vector.length;i++){



    var deg =0;
    if(i!=firstIndex){
        deg= parseInt(vector[firstIndex][0]) - parseInt(vector[i][0]);

    }


    if(deg==180){
        newVector.push(vector[firstIndex])
        newVector.push(vector[i])
    }

    if(i==vector.length-1){
        if(firstIndex ==vector.length-1){
            break;
        }
        i=0;
        firstIndex =firstIndex +1;
    }
}

console.log(newVector);