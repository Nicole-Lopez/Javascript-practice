// > reverse(123);
// < 321
// > reverse(95823);
// < 32859

function reverse(num){
    let result = 0;

    while(num>0){
        rightmost = num % 10;
        
        result = result * 10 + rightmost;
        
        num = Math.floor(num/10);
    }

    return result    
}