console.log('starting-app');
setTimeout(() => {
    console.log('inside calback');
    
},2000);


setTimeout(() => {
    console.log('2nd inside calback');
    
},0);
console.log('finishing app')
