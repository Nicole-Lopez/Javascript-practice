function factorial(n) {
	if (n>=0 && n<2) return 1;
	
	return n * factorial(n - 1);
}