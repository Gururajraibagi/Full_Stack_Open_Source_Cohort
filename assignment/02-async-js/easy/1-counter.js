// Create a counter in JavaScript

//We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
//It should go up as time goes by in intervals of 1 second

let counter=0;
let interval= setInterval(incrementCounter,1000);
function incrementCounter(){
    counter++;
    const date=new Date();
    console.log(counter+" Date:",date.toLocaleTimeString());
    if(counter === 3){
        console.log("inside clear counter:",counter);
        console.log(interval);
        console.log(clearInterval(interval));
    }

}



