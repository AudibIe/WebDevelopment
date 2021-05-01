console.log("All numbers between -10 and 19")
for(var num = -10; num <=19; num++) {
	console.log(num);	
}

console.log("All even numbers between 10 and 40")
for(var even=10; even <= 40; even++) {
	if(even % 2 === 0)
	console.log(even);
}
console.log("Odd numbers between 300 and 333")
for(var num= 300; num <=333; num++) {
	if(num % 2 !==0) {console.log(num)}
}

console.log("All numbers divisible by 3 and 5 between 5 and 50")
for(var num=5; num <=50; num++) {
	if(num % 3 ==0 && num % 5 ==0) {
		console.log(num)
	}
}