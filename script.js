function fibonacci(n) {

 if (n === 1) return 0;
  if (n === 2) return 1;
	
	let a = 0, b = 1;

	if(n === 1)return a;
	if(n === 2)return b;

	for(let i=3; i<=n; i++){
		[a,b] = [b, a+b]
	}
	return b;
}

console.log(fibonacci(2));

module.exports = fibonacci;
