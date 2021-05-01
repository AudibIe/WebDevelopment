console.log("All numbers betwee -10 and 19");
var num = -10;
while(num <= 19) {
	console.log(num);
	num++;
}

console.log("All odd numbers between 10 and 40");
var even = 10;

while(even <= 40) {
	console.log(even);
	even+=2;
}


console.log("All odd numbers between 300 and 333");
var odd = 300

while(odd <= 333) {
	if(odd % 2 !==0) {
		console.log(odd)
	}
odd++;
}

console.log("All numbers divisible by 5 and 3 between 5 and 50")
var counter = 5;

while(counter <=50) {
	if(counter % 5 === 0 && counter % 3 === 0) {
		console.log(counter);
	}
	counter++;
}
