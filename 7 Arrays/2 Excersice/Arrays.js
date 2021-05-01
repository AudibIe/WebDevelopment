var numbers = [1,2,3,4,5];

function printReverse(arr) {
	for(var i= arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}


function isUniform(arr) {
 var first = arr[0];
 for(var i = 0; i < arr.lenght; i++){
 	if(arr[i] !== first){
 		return false
 	}
 }
 return true;
}

var example = [1,2,3,4,5] //  length is 5 and index is 4

function sumArray(arr) {
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}

function max(arr) {
	var max = arr[0]
	for (var i = 1; i< arr.length; i++){
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

