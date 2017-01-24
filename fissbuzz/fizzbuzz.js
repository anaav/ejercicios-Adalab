
var numeros=[1,2,3,4,5,8,15,20,21];
var resultado=[];

for (var i = 0; i < numeros.length; i++) {
	

	if(numeros[i] % 3===0 && numeros[i] % 5===0){
		resultado.push("FizzBuzz");

	} else if (numeros[i] % 3 === 0) {
		resultado.push("Fizz") ;

	} else if (numeros[i] % 5 ===0) {
		resultado.push ("Buzz");

	} else {
		resultado.push(numeros[i]);
	}
}
	

	console.log (resultado);
	













