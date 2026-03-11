function calculateAreaOfCircle(raio) {
    return Math.PI * (raio ** 2);
}

function typeOfTriangle(lado1, lado2, lado3) {
    if(!isTriangle(lado1, lado2, lado3)) return "Not a valid triangle!";

    if(lado1 === lado2 && lado2 === lado3) return "equilateral";
    if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3) return "isosceles";
    return "scalene";
}

function isTriangle(lado1, lado2, lado3) {
    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 
        && lado2 + lado3 > lado1) return true;
    
    return false;
}

export default { calculateAreaOfCircle, typeOfTriangle };
export { calculateAreaOfCircle, typeOfTriangle };