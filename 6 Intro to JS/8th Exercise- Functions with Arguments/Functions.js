
function isEven(x) {
	if(x % 2 !== 0) {
		return false;
	}

	else{ return true;}
}

function factorial (n) {
	var total = 1;
	for (i=1; i<=n; i++) {
		total = total * i;
	}
	return total;
}

function kebabToSnake(str) {
        var newStr = str.replace(/-/g, "_");
        return newStr;
       
    }
