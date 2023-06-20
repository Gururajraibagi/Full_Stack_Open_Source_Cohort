// Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



let timeout = setTimeout(handlecounter,1000);
let counter=0;

function handlecounter(){
    console.log(++counter);
    if(counter === 5){

        clearTimeout(timeout)

    }else
        timeout=setTimeout(handlecounter,1000);

}




































































//(Hint: setTimeout)