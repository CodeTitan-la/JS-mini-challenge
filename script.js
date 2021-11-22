let pointA = [0,5];
let pointB = [3,2];
let pointC = [1,10];
let pointD = [7,4];

const logRectInfo = function(topLeft, bottomRight){
    let width = bottomRight[0] - topLeft[0];
    let length = topLeft[1] - bottomRight[1];
    let area = width * length;
    let parameter = 2 * (width + length);

    console.log(`Area = ${area}`);
    console.log(`Paramenter = ${parameter}`);
}

logRectInfo(pointC,pointD);